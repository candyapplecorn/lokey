import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import SearchContainer from './map/search_container';
import ProfileContainer from './profile/profile_container';
import Interests from './interests/interests';
import Home from './home';

const App = () => (
  <div className="everything">
    <Switch>
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute path="/sign-in" component={SessionFormContainer} />
      <AuthRoute path="/sign-up" component={SessionFormContainer} />
      <Route path="/map" component={SearchContainer} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <ProtectedRoute path="/interests" component={Interests} />
    </Switch>
    <footer className="navbar-footer">
      <div className="navbar-footer-div">
        <NavbarContainer />
      </div>
    </footer>
</div>
);

export default App;
