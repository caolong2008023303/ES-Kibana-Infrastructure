/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { PureComponent, Fragment } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPanel,
  EuiSpacer,
  EuiLink,
  EuiCallOut,
  EuiToolTip,
  EuiHealth,
} from '@elastic/eui';
import { capitalize, get } from 'lodash';
import { ClusterStatus } from '../cluster_status';
import { EuiMonitoringTable } from '../../table';
import { StatusIcon } from '../../status_icon';
import { formatMetric, formatNumber } from '../../../lib/format_number';
import { getSafeForExternalLink } from '../../../lib/get_safe_for_external_link';
import { i18n } from '@kbn/i18n';
import { SetupModeBadge } from '../../setup_mode/badge';
import { KIBANA_SYSTEM_ID } from '../../../../common/constants';
import { ListingCallOut } from '../../setup_mode/listing_callout';
import { AlertsStatus } from '../../../alerts/status';
import { isSetupModeFeatureEnabled } from '../../../lib/setup_mode';
import { SetupModeFeature } from '../../../../common/enums';

const getColumns = (setupMode, alerts) => {
  const columns = [
    {
      name: i18n.translate('xpack.monitoring.kibana.listing.nameColumnTitle', {
        defaultMessage: 'Name',
      }),
      field: 'name',
      render: (name, kibana) => {
        let setupModeStatus = null;
        if (isSetupModeFeatureEnabled(SetupModeFeature.MetricbeatMigration)) {
          const list = get(setupMode, 'data.byUuid', {});
          const uuid = get(kibana, 'kibana.uuid');
          const status = list[uuid] || {};
          const instance = {
            uuid,
            name: kibana.name,
          };

          setupModeStatus = (
            <div className="monTableCell__setupModeStatus">
              <SetupModeBadge
                setupMode={setupMode}
                status={status}
                instance={instance}
                productName={KIBANA_SYSTEM_ID}
              />
            </div>
          );
          if (status.isNetNewUser) {
            return (
              <div>
                {name}
                {setupModeStatus}
              </div>
            );
          }
        }

        return (
          <div>
            <EuiLink
              href={getSafeForExternalLink(`#/kibana/instances/${kibana.kibana.uuid}`)}
              data-test-subj={`kibanaLink-${name}`}
            >
              {name}
            </EuiLink>
            {setupModeStatus}
          </div>
        );
      },
    },
    {
      name: i18n.translate('xpack.monitoring.kibana.listing.alertsColumnTitle', {
        defaultMessage: 'Alerts',
      }),
      field: 'isOnline',
      width: '175px',
      sortable: true,
      render: () => {
        return (
          <AlertsStatus
            showBadge={true}
            alerts={alerts}
            nextStepsFilter={(nextStep) => {
              if (nextStep.text.includes('Kibana instances')) {
                return false;
              }
              return true;
            }}
          />
        );
      },
    },
    {
      name: i18n.translate('xpack.monitoring.kibana.listing.statusColumnTitle', {
        defaultMessage: 'Status',
      }),
      field: 'status',
      render: (status, kibana) => {
        return (
          <EuiToolTip content={status} position="bottom" trigger="hover">
            <EuiHealth
              color={kibana.availability ? 'success' : 'subdued'}
              data-test-subj="statusIcon"
            >
              {capitalize(status)}
            </EuiHealth>
          </EuiToolTip>
        );
      },
    },
    {
      name: i18n.translate('xpack.monitoring.kibana.listing.loadAverageColumnTitle', {
        defaultMessage: 'Load Average',
      }),
      field: 'os.load.1m',
      render: (value) => <span>{formatMetric(value, '0.00')}</span>,
    },
    {
      name: i18n.translate('xpack.monitoring.kibana.listing.memorySizeColumnTitle', {
        defaultMessage: 'Memory Size',
      }),
      field: 'process.memory.resident_set_size_in_bytes',
      render: (value) => <span>{formatNumber(value, 'byte')}</span>,
    },
    {
      name: i18n.translate('xpack.monitoring.kibana.listing.requestsColumnTitle', {
        defaultMessage: 'Requests',
      }),
      field: 'requests.total',
      render: (value) => <span>{formatNumber(value, 'int_commas')}</span>,
    },
    {
      name: i18n.translate('xpack.monitoring.kibana.listing.responseTimeColumnTitle', {
        defaultMessage: 'Response Times',
      }),
      // It is possible this does not exist through MB collection
      field: 'response_times.average',
      render: (value, kibana) => {
        if (!value) {
          return null;
        }

        return (
          <div>
            <div className="monTableCell__splitNumber">
              {formatNumber(value, 'int_commas') + ' ms avg'}
            </div>
            <div className="monTableCell__splitNumber">
              {formatNumber(kibana.response_times.max, 'int_commas')} ms max
            </div>
          </div>
        );
      },
    },
  ];

  return columns;
};

export class KibanaInstances extends PureComponent {
  render() {
    const { clusterStatus, alerts, setupMode, sorting, pagination, onTableChange } = this.props;

    let setupModeCallOut = null;
    // Merge the instances data with the setup data if enabled
    const instances = this.props.instances || [];
    if (isSetupModeFeatureEnabled(SetupModeFeature.MetricbeatMigration)) {
      // We want to create a seamless experience for the user by merging in the setup data
      // and the node data from monitoring indices in the likely scenario where some instances
      // are using MB collection and some are using no collection
      const instancesByUuid = instances.reduce(
        (byUuid, instance) => ({
          ...byUuid,
          [get(instance, 'kibana.uuid')]: instance,
        }),
        {}
      );

      instances.push(
        ...Object.entries(setupMode.data.byUuid).reduce((instances, [nodeUuid, instance]) => {
          if (!instancesByUuid[nodeUuid]) {
            instances.push({
              kibana: {
                ...instance.instance.kibana,
                status: StatusIcon.TYPES.GRAY,
              },
            });
          }
          return instances;
        }, [])
      );

      setupModeCallOut = (
        <ListingCallOut
          setupModeData={setupMode.data}
          useNodeIdentifier={false}
          productName={KIBANA_SYSTEM_ID}
          customRenderer={() => {
            const customRenderResponse = {
              shouldRender: false,
              componentToRender: null,
            };

            const hasInstances = setupMode.data.totalUniqueInstanceCount > 0;
            if (!hasInstances) {
              customRenderResponse.shouldRender = true;
              customRenderResponse.componentToRender = (
                <Fragment>
                  <EuiCallOut
                    title={i18n.translate(
                      'xpack.monitoring.kibana.instances.metricbeatMigration.detectedNodeTitle',
                      {
                        defaultMessage: 'Kibana instance detected',
                      }
                    )}
                    color="warning"
                    iconType="flag"
                  >
                    <p>
                      {i18n.translate(
                        'xpack.monitoring.kibana.instances.metricbeatMigration.detectedNodeDescription',
                        {
                          defaultMessage: `The following instances are not monitored.
                        Click 'Monitor with Metricbeat' below to start monitoring.`,
                        }
                      )}
                    </p>
                  </EuiCallOut>
                  <EuiSpacer size="m" />
                </Fragment>
              );
            }

            return customRenderResponse;
          }}
        />
      );
    }

    const dataFlattened = instances.map((item) => ({
      ...item,
      name: item.kibana.name,
      status: item.kibana.status,
    }));

    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPanel>
            <ClusterStatus stats={clusterStatus} alerts={alerts} />
          </EuiPanel>
          <EuiSpacer size="m" />
          {setupModeCallOut}
          <EuiPageContent>
            <EuiMonitoringTable
              className="kibanaInstancesTable"
              rows={dataFlattened}
              columns={getColumns(setupMode, alerts)}
              sorting={sorting}
              pagination={pagination}
              setupMode={setupMode}
              productName={KIBANA_SYSTEM_ID}
              search={{
                box: {
                  incremental: true,
                  placeholder: i18n.translate(
                    'xpack.monitoring.kibana.listing.filterInstancesPlaceholder',
                    {
                      defaultMessage: 'Filter Instances???',
                    }
                  ),
                },
              }}
              onTableChange={onTableChange}
              executeQueryOptions={{
                defaultFields: ['name'],
              }}
            />
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
