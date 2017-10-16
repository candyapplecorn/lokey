export const fetchActivities = () => (
  $.ajax({
    method: 'GET',
    url: '/api/activities',
    contentType:"application/json; charset=utf-8",
    dataType:"json",
  })
);
