const knex = require('../db/connection');
const qs = require('querystring')

// Returns a promise, the .then will have the activities array
function INDEX(){
  // The RoR jbuilder and React utils expected a different format, so
  // rather than foreign keys, a more formatted response id desired:
  return knex.raw(`
    SELECT e.*, c.latitude AS lat, c.longitude AS lng, a.name AS activity
    FROM events e
    JOIN coordinates c ON c.id = e.coordinate_id
    JOIN activities  a ON a.id = e.activity_id
  `)//.catch(err)
}

function CREATE(req){
  if (req.body.event)
    req.body = { ... req.body.event };

  let { user: currentUser, body: formEvent } = req

  if (!formEvent.coordinate)
    formEvent.coordinate = {
      lat: formEvent.lat, lng: formEvent.lng
    };

  const { activity, coordinate: { lat, lng } } = formEvent;
  let { activityId: activity_id, description } = formEvent;
  const { id: host_id } = currentUser;

  return knex('activities').select('id').where({ name: activity })
  .then(activityArr => (activity_id = activityArr[0].id))
  .then(() =>
    knex('coordinates')
    .insert({ latitude: lat, longitude: lng })
    .returning("id")
  )

  .then((coordinate_id) => {
    return knex('events')
    .insert({ host_id, activity_id, description, coordinate_id: Number(coordinate_id) })
    .returning("*")
  })

  .then((event) => {
    return knex('activities').select('id').where({ name: activity })
    .then(activity => {
      return knex.raw(`
        SELECT e.*, c.*, a.*, u.username, u.id, a.name AS activity
        FROM events e
        JOIN coordinates c ON c.id = e.coordinate_id
        JOIN activities a  ON a.id = e.activity_id
        JOIN users u       ON u.id = e.host_id
        WHERE e.id = ?
      `, [event[0].id])
    })
    .then(o => {
      let event = o.rows[0];
      let [lat, lng] = [event.latitude, event.longitude].map(Number)
      event.lat = lat, event.lng = lng;

      return event;
    })
  })
  //.catch(err)
}

//                 vvvvvv MAKE SURE THAT'S SAME AS UTIL
function DESTROY({ params: { id: event_id }}){
  return knex.raw(`
    DELETE FROM coordinates WHERE coordinates.id = (
      SELECT coordinate_id
      FROM events
      WHERE events.id = ?
    )`, [event_id])
  .then((response) => {
    return knex('events')
    .where({ id: event_id })
    .del();
    })
  ;
}

module.exports = {
  INDEX,
  CREATE,
  DESTROY
};
