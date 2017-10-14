exports.seed = (knex, Promise) =>
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
