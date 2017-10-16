exports.up = (knex, Promise) =>
  knex.schema.createTable('coordinates', table => {
    table.increments();
    table.decimal('longitude').notNullable();
    table.decimal('latitude').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });

exports.down = (knex, Promise) => knex.schema.dropTable('coordinates');
