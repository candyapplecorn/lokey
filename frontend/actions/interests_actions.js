import * as InterestAPIUtil from '../util/interests_util';

export const RECEIVE_ALL_INTERESTS = 'RECEIVE_ALL_INTERESTS';
export const RECEIVE_INTEREST = 'RECEIVE_INTEREST';
export const REMOVE_INTEREST = 'REMOVE_INTEREST';

export const receiveAllInterests = interests => ({
  type: RECEIVE_ALL_INTERESTS,
  interests
});

export const receiveInterest = interest => ({
  type: RECEIVE_INTEREST,
  interest
});

export const removeInterest = interest => ({
  type: REMOVE_INTEREST,
  interest
});

export const getInterests = () => dispatch => {
  InterestAPIUtil.getInterests().then(interests => dispatch(receiveAllInterests(interests)));
};

export const createInterest = ({ activityId }) => dispatch => {
  InterestAPIUtil.createInterest({ activityId }).then(interest => dispatch(receiveInterest(interest)));
};

export const deleteInterest = ({ activityId }) => dispatch => {
  InterestAPIUtil.deleteInterest({ activityId }).then(interest => dispatch(removeInterest(interest)));
};
