export const fetchEvents = bounds => (
  $.ajax({
    method: 'GET',
    url: '/api/events',
    data: {bounds}
  })
);

export const fetchEvent = eventId => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${eventId}`
  })
);
