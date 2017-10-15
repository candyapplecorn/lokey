
exports.up = (knex, Promise) =>
  knex.schema.createTable('events', t => {
    t.increments()
    t.integer('coordinate_id').unsigned().references('id').inTable('coordinates');
    t.integer('host_id').unsigned().references('id').inTable('users');
    t.integer('activity_id').unsigned().references('id').inTable('activities');
    t.text('description').defaultTo("")
  })
;

exports.down = (knex, Promise) => knex.schema.dropTable('events');
