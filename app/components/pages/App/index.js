/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import { NotFoundPage } from '@capillarytech/vulcan-react-sdk/components';
import {
  getHistoryInstance,
  injectSaga,
  sagaInjectorTypes,
  withReloadAndRedirection,
} from '@capillarytech/vulcan-react-sdk/utils';
import { ConnectedRouter } from 'connected-react-router/immutable';
import React from 'react';
import { Switch } from 'react-router-dom';
import { compose } from 'redux';

import { appName, prefix } from '../../../../app-config';
import { LOGIN_URL } from '../../../config/constants';
import GlobalStyle from '../../../global-styles';
import { userIsAuthenticated } from '../../../utils/authWrapper';
import RenderRoute from '../../atoms/RenderRoute';
import Cap from '../Cap/Loadable';
import Login from '../Login/Loadable';
import loginSagas from '../Login/saga';

const Protected = userIsAuthenticated(Cap);

export const App = () => {
  const [history] = React.useState(() => getHistoryInstance());
  return (
    <div className={CURRENT_APP_NAME}>
      <ConnectedRouter history={history}>
        <Switch>
          <RenderRoute exact path={LOGIN_URL} component={Login} />
          <RenderRoute path="/" component={Protected} key="/" />
          <RenderRoute component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
      <GlobalStyle />
    </div>
  );
};

//Logout saga's should be injected at all times even if login page is unmounted. Hence daemon mode
const withSaga = loginSagas.map((saga, index) =>
  injectSaga({ key: `${CURRENT_APP_NAME}-login-${index}`, saga, mode: sagaInjectorTypes.DAEMON }),
);

export default compose(...withSaga)(withReloadAndRedirection(App, { appName, prefix }));
