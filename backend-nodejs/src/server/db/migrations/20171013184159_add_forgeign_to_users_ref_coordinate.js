
exports.up = (knex, Promise) =>
    knex.schema.alterTable('users', table => {
      // table.foreign('coordinate_id').references('coordinates.id');
      table.integer('coordinate_id').unsigned().references('id').inTable('coordinates');
    })

exports.down = (knex, Promise) =>
    knex.schema.alterTable('users', table => {
      //table.dropColumn('coordinate_id');
    })
