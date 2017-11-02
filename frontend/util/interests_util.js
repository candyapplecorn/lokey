export const getInterests = user => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/interests`,
  });
};

export const createInterest = ({ user, activityId }) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${user.id}/interests/${activityId}`
  });
};

export const deleteInterest = ({ user, activityId }) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${user.id}/interests/${activityId}`
  })
);
