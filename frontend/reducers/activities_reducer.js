import { RECEIVE_ALL_ACTIVITIES } from '../actions/activity_actions';
import merge from 'lodash/merge';

const activitiesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ACTIVITIES:
      return merge({}, action.activities);
    default:
      return state;
  }
};

export default activitiesReducer;
