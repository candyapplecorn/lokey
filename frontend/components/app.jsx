import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="everything">
    <Switch>
      <AuthRoute path="/sign-in" component={SessionFormContainer} />
      <AuthRoute path="/sign-up" component={SessionFormContainer} />
    </Switch>
</div>
);

export default App;
