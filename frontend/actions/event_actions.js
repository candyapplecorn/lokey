import * as EventAPIUtil from '../util/event_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const getEvents = () => dispatch => (
  EventAPIUtil.fetchEvents().then(events => dispatch(receiveAllEvents(events)))
);

export const getEvent = () => dispatch => (
  EventAPIUtil.fetchEvent().then(event => dispatch(receiveAllEvents(event)))
);
