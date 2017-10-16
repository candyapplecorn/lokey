export const fetchEvents = bounds => {
  return $.ajax({
    method: 'GET',
    url: '/api/events',
    data: { bounds }
  });
};

export const fetchEvent = eventId => (
  $.ajax({
    method: 'GET',
    url: `api/events/${eventId}`
  })
);

export const createEvent = event => {
  return $.ajax({
    method: "POST",
    url: "api/events",
    data: { event }
  });
};
