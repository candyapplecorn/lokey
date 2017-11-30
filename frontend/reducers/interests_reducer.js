import { RECEIVE_ALL_INTERESTS, RECEIVE_INTEREST, REMOVE_INTEREST } from '../actions/interests_actions';
import merge from 'lodash/merge';

const interestsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_INTERESTS:
      return merge({}, action.interests);
    case RECEIVE_INTEREST:
      return merge({}, state, {[action.interest.id]: action.interest});
    case REMOVE_INTEREST:
      const newState = merge({}, state);
      delete newState[action.interest.id];
      return newState;
    default:
      return state;
  }
};

export default interestsReducer;
