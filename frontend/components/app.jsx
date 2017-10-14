import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';
import MapContainer from './map/map_container';

import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';

const App = () => (
  <div className="everything">
    <Switch>
      <AuthRoute path="/sign-in" component={SessionFormContainer} />
      <AuthRoute path="/sign-up" component={SessionFormContainer} />
      <Route path="/map" component={MapContainer} />
    </Switch>
    <footer className="navbar-footer">
      <div className="navbar-footer-div">
        <NavbarContainer />
      </div>
    </footer>
</div>
);

export default App;
