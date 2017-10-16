import * as ActivityAPIUtil from '../util/activity_util';

export const RECEIVE_ALL_ACTIVITIES = 'RECEIVE_ALL_ACTIVITIES';

export const receiveAllActivities = activities => ({
  type: RECEIVE_ALL_ACTIVITIES,
  activities
});

export const getActivities = () => dispatch => {
  ActivityAPIUtil.fetchActivities().then(activities => dispatch(receiveAllActivities(activities)));
};
