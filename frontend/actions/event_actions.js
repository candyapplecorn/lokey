import * as EventAPIUtil from '../util/event_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const getEvents = bounds => dispatch => (
  EventAPIUtil.fetchEvents(bounds).then(events => dispatch(receiveAllEvents(events)))
);

export const getEvent = () => dispatch => (
  EventAPIUtil.fetchEvent().then(event => dispatch(receiveAllEvents(event)))
);

export const createEvent = event => dispatch => {
  return EventAPIUtil.createEvent(event).then(e => dispatch(receiveEvent(e)));
};
