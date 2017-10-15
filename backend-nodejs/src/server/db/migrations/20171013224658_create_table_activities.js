exports.up = (knex, Promise) =>
  knex.schema.createTableIfNotExists('activities', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.timestamps(true, true);
  });

//exports.down = (knex, Promise) => knex.schema.dropTable('activities');
exports.down = (knex, Promise) => knex.raw('DROP TABLE IF EXISTS activities CASCADE');
