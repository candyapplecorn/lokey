export const fetchActivities = () => (
  $.ajax({
    method: 'GET',
    url: '/api/activities',
  })
);
