import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

/*
DEBUG! BLAME JOE!
*/
import * as SessionActions from './actions/session_actions';
import { bindActionCreators } from 'redux';
import * as ActivityUtils from './util/activity_util';
import * as InterestsUtil from './util/interests_util';
import * as InterestActions from './actions/interests_actions';
// END DEBUG! THAT DARN BURGERMEISTER!

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // DEBUG!
  debug({ store })

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

function debug({ store, store: { dispatch } }){
  window.dispatch = dispatch
  window.store = store;
  window.BoundSessionActions = bindActionCreators(SessionActions, dispatch)
  window.ActivityUtils = ActivityUtils;
  window.InterestsUtil = InterestsUtil;
  window.InterestsActions = InterestActions;
}
