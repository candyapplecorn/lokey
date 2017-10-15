
exports.up = (knex, Promise) =>
  knex.schema.createTable('events', t => {
    t.integer('coordinate_id').unsigned();
    t.integer('host_id').unsigned();
    t.integer('activity_id').unsigned();

    t.increments()
    t.text('description').defaultTo("")

    t.foreign('coordinate_id').references('id').inTable('coordinates').onDelete('CASCADE');
    t.foreign('host_id').references('id').inTable('users');
    t.foreign('activity_id').references('id').inTable('activities');
  })
;

exports.down = (knex, Promise) => knex.schema.dropTable('events');
