exports.up = (knex, Promise) =>
  knex.schema.createTable('users', table => {
    table.increments();
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });

//exports.down = (knex, Promise) => knex.schema.dropTable('users');
exports.down = (knex, Promise) => knex.raw('DROP TABLE IF EXISTS users CASCADE')
