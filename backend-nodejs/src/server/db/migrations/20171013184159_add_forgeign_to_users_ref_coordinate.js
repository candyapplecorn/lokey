
exports.up = (knex, Promise) =>
    knex.schema.alterTable('users', table => {
      table.foreign('coordinate_id').references('coordinates.id');
    })

exports.down = (knex, Promise) =>
    knex.schema.alterTable('users', table => {
      //table.dropColumn('coordinate_id');
    })
