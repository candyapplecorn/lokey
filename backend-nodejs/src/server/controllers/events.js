const knex = require('../db/connection');

const err = error => console.log(error);

// Returns a promise, the .then will have the activities array
function INDEX(){
  // return knex.select('*').from('events')

  // The RoR jbuilder and React utils expected a different format, so
  // rather than foreign keys, a more formatted response id desired:
  return knex.raw(`
    SELECT e.*, c.latitude AS lat, c.longitude AS lng, a.name AS activity
    FROM events e
    JOIN coordinates c ON c.id = e.coordinate_id
    JOIN activities  a ON a.id = e.activity_id
  `).catch(err)
}

function CREATE({ user: currentUser, body: formEvent }){
  console.log(formEvent)
  const { coordinate: { lat, lng } } = formEvent
  const { activityId: activity_id, description } = formEvent
  const { id: host_id } = currentUser

  return knex('coordinates')
  .insert({ latitude: lat, longitude: lng })
  .returning("id")
  .then((coordinate_id) => {
    console.log(coordinate_id)
    return knex('events')
    .insert({ host_id, activity_id, description, coordinate_id: Number(coordinate_id) })
    .returning("*")
  }).catch(err)
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

  /*knex.select("*")
  .from('events')
  .where({ id: event_id })
  .then(event => { // coordinate_id, host_id, activity_id
    console.log(event)
  }).catch(err)*/
}

module.exports = {
  INDEX,
  CREATE,
  DESTROY
};
