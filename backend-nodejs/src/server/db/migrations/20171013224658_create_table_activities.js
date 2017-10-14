exports.up = (knex, Promise) =>
  knex.schema.createTable('activities', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTable('activities');
