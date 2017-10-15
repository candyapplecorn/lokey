const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) =>
knex('activities').del()
.then(() => {
  const activities = [
    'baseball', 'football', 'pottery', 'catch',
    'banana juggling', 'unicycling', 'bicycling',
    'programming', 'netflix', 'couch surfing'
  ]
  return Promise.all(
    activities.map(name => knex('activities').insert({
      name
    })))
})
.then(() =>
  knex('users').del()
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('mochapie', salt);
    return Promise.join(
      knex('users').insert({
        username: 'renaldo',
        password: hash
      })
    );
  })
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('apples1gyy', salt);
    return Promise.join(
      knex('users').insert({
        username: 'barbara',
        password: hash
      })
    );
  })
)

.then(() =>
knex('coordinates').del()
.then(() => Promise.all([
  knex('coordinates').insert({
    latitude: 37.5,
    longitude: 124.6
  })
  , knex('coordinates').insert({
    latitude: 57.5,
    longitude: 184.6
  })
  , knex('coordinates').insert({
    latitude: 36.5,
    longitude: 125.6
  })
]))
)

.then(() =>
Promise.all([
  knex('users')
  .where('username', '=', 'renaldo')
  .update({
    coordinate_id: '1'
  })
  , knex('users')
  .where('username', '=', 'barbara')
  .update({
    coordinate_id: '2'
  })
]))

.then(() =>
Promise.all([
  knex('events').insert({
    coordinate_id: 1
  , host_id: 1
  , activity_id: 1
  , description: "A cool seeded event!"
  })
, knex('events').insert({
    coordinate_id: 2
  , host_id: 2
  , activity_id: 2
  , description: "A great seeded event."
  })
]))

;
