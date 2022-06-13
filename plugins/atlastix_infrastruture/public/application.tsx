// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppMountParameters, CoreStart } from '../../../src/core/public';
// import { AppPluginStartDependencies } from './types';
// import { AtlastixInfrastrutureApp } from './components/app';

// export const renderApp = (
//   { application, notifications, http }: CoreStart,
//   { navigation }: AppPluginStartDependencies,
//   { appBasePath, element }: AppMountParameters
// ) => {
//   ReactDOM.render(
//     <AtlastixInfrastrutureApp
//       basename={appBasePath}
//       application={application}
//       notifications={notifications}
//       http={http}
//       navigation={navigation}
//     />,
//     element
//   );

//   return () => ReactDOM.unmountComponentAtNode(element);
// };

import { History } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, useHistory } from 'react-router-dom';
import { CoreStart, AppMountParameters } from '../../../src/core/public';
import { AppPluginStartDependencies } from './types';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiBasicTable,
  EuiHealth,
  EuiButton
} from '@elastic/eui';

interface LabelTemplateItem {
  hostName: string;
  state: boolean;
}

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

const HostState = () => {
  const history_1 = useHistory();
  return (
    <EuiPageBody data-test-subj="appHostState">
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Welcome to Host State!</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiPageContentBody>
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
                'onClick': () => { history_1.push('/host-details', { data: rowProp.hostName }) }
              };
            }}
          />
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  )
};

const AtlastixInfrastrutureApp = ({ history, coreStart }: { history: History; coreStart: CoreStart }) => (
  <Router history={history}>
    <EuiPage>
      <Route path="/" exact render={() => <Redirect to="/host-state" />} />
      <Route path="/host-state" exact component={HostState} />
      <Route path="/host-details" render={() => (
        <EuiPageBody data-test-subj="hostDetails">
          <EuiPageHeader>
            <EuiPageHeaderSection>
              <EuiTitle size="l">
                <h1>{history.location.state.data}</h1>
              </EuiTitle>
            </EuiPageHeaderSection>
            <EuiButton data-test-subj="redirectDashboard" onClick={() => { coreStart.application.navigateToUrl('/avu/app/dashboards') }}>
              Dashboard
        </EuiButton>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiTitle>
                  <h2>Page A section title</h2>
                </EuiTitle>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>Page A&apos;s content goes here</EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      )} />
    </EuiPage>
  </Router>
);

export const renderApp = (coreStart: CoreStart, { navigation }: AppPluginStartDependencies, { history, element }: AppMountParameters) => {
  ReactDOM.render(<AtlastixInfrastrutureApp history={history} coreStart={coreStart} />, element);

  return () => ReactDOM.unmountComponentAtNode(element);
};