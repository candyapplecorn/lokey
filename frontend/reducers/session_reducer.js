import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action) {
    case RECEIVE_CURRENT_USER:
      return merge(newState, {currentUser: action.user});
    default:
      return state;
  }
};


export default sessionReducer;
