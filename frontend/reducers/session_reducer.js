import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const { currentUser } = action;

  // debugger

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, state);
      newState = merge(newState, { currentUser });
      return newState;
    default:
      return state;
  }
};


export default sessionReducer;
