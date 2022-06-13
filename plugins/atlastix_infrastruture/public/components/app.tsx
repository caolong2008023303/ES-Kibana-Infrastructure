import React, { useState } from 'react';
import { i18n } from '@kbn/i18n';
import { FormattedMessage, I18nProvider } from '@kbn/i18n/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CoreStart } from '../../../../src/core/public';
import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';
import { PLUGIN_ID, PLUGIN_NAME } from '../../common';

import {
  EuiButton,
  EuiHorizontalRule,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
  EuiText,
  EuiBasicTable,
  EuiHealth
} from '@elastic/eui';

interface AtlastixInfrastrutureAppDeps {
  basename: string;
  application: CoreStart['application']
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
}

interface LabelTemplateItem {
  hostName: string;
  state: boolean;
}

export const AtlastixInfrastrutureApp = ({
  basename,
  application,
  notifications,
  http,
  navigation
}: AtlastixInfrastrutureAppDeps) => {
  // Use React hooks to manage state.
  const [timestamp, setTimestamp] = useState<string | undefined>();

  const onClickHandler = () => {
    // Use the core http service to make a response to the server API.
    http.get('/api/atlastix_infrastruture/example').then((res) => {
      setTimestamp(res.time);
      // Use the core notifications service to display a success message.
      notifications.toasts.addSuccess(
        i18n.translate('atlastixInfrastruture.dataUpdated', {
          defaultMessage: 'Data updated',
        })
      );
    });
  };

  const items: LabelTemplateItem[] = [
    {
      hostName: 'Host1',
      state: true
    },
    {
      hostName: 'Host2',
      state: false
    },
    {
      hostName: 'Host3',
      state: true
    },
  ];

  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return (
    <Router basename={basename}>
      <I18nProvider>
        <>
          <navigation.ui.TopNavMenu
            appName={PLUGIN_ID}
            showSearchBar={true}
            useDefaultBehaviors={true}
          />
          <EuiPage restrictWidth="1000px">
            <EuiPageBody>
              <EuiPageHeader>
                <EuiTitle size="l">
                  <h1>
                    <FormattedMessage
                      id="atlastixInfrastruture.helloWorldText"
                      defaultMessage="{name}"
                      values={{ name: PLUGIN_NAME }}
                    />
                  </h1>
                </EuiTitle>
              </EuiPageHeader>
              <EuiPageContent>
                <EuiPageContentHeader>
                  <EuiTitle>
                    <h2>
                      <FormattedMessage
                        id="atlastixInfrastruture.congratulationsTitle"
                        defaultMessage="Congratulations, you have successfully created a new Kibana Plugin!"
                      />
                    </h2>
                  </EuiTitle>
                </EuiPageContentHeader>
                <EuiPageContentBody>
                  <EuiText>
                    <p>
                      <FormattedMessage
                        id="atlastixInfrastruture.content"
                        defaultMessage="Look through the generated code and check out the plugin development documentation."
                      />
                    </p>
                    <EuiHorizontalRule />
                    <p>
                      <FormattedMessage
                        id="atlastixInfrastruture.timestampText"
                        defaultMessage="Last timestamp: {time}"
                        values={{ time: timestamp ? timestamp : 'Unknown' }}
                      />
                    </p>
                    <EuiButton type="primary" size="s" onClick={onClickHandler}>
                      <FormattedMessage
                        id="atlastixInfrastruture.buttonText"
                        defaultMessage="Get data"
                      />
                    </EuiButton>
                    <EuiHorizontalRule />
                    {/* Add Eui table here */}
                    <EuiBasicTable<LabelTemplateItem>
                      tableCaption="Host State"
                      items={items}
                      columns={[
                        {
                          field: 'hostName',
                          name: 'Host Name',
                        },
                        {
                          field: 'state',
                          name: 'state',
                          render: (state: boolean) => {
                            const color = state ? 'success' : 'danger';
                            const label = state ? 'Online' : 'Offline';
                            return <EuiHealth color={color}>{label}</EuiHealth>;
                          },
                        },
                      ]}
                      rowProps={(rowProp) => {
                        return {
                          'data-test-subj': `summaryTableRow-${rowProp.hostName}`,
                          'onClick': () => { alert(1) }
                        };
                      }}
                    />
                  </EuiText>
                </EuiPageContentBody>
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage>
        </>
      </I18nProvider>
    </Router>
  );
};

/**
 *
 * This plugin should be modular and componentized
 *
 * */
