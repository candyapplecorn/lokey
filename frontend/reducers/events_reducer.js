import { RECEIVE_ALL_EVENTS} from '../actions/event_actions';
import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge(newState, action.events);
    default:
      return state;
  }
};

export default eventsReducer;
