
exports.up = (knex, Promise) =>
    knex.schema.alterTable('users', table => {
      // table.foreign('coordinate_id').references('coordinates.id');
      table.string('email').notNullable();
    });

exports.down = (knex, Promise) =>
    knex.schema.alterTable('users', table => {
      table.dropColumn('email');
    });
