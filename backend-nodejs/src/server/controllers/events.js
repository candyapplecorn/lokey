const knex = require('../db/connection');

// Returns a promise, the .then will have the activities array
function INDEX(){
  return knex.select('*').from('events')
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
  }).catch(err => console.log(err))
}

module.exports = {
  INDEX,
  CREATE
};
