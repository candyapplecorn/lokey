export const fetchActivities = () => (
  $.ajax({
    method: 'GET',
    url: '/api/activities',
    contentType:"application/json; charset=utf-8",
    dataType:"json",
  })
);

/*
CREATE, DESTROY
*/

export const createActivity = activity => {
  return $.ajax({
    method: 'POST',
    url: `/api/activities/${activity}`
  });
};

export const deleteActivity = activity => (
  $.ajax({
    method: 'DELETE',
    url: `/api/activities/${activity}`
  })
);
