export const getInterests = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/interests`,
  });
};

export const createInterest = ({ activityId }) => {
  return $.ajax({
    method: 'POST',
    url: `/api/interests/${activityId}`
  });
};

export const deleteInterest = ({ activityId }) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/interests/${activityId}`
  })
);
