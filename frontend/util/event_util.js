export const fetchEvents = (filters) => (
  $.ajax({
    method: 'GET',
    url: '/api/events',
    filters
  })
);
