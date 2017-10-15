exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS interests (
      activity_id int NOT NULL references activities (id) ON DELETE CASCADE,
      user_id int NOT NULL references users (id) ON DELETE CASCADE,
      UNIQUE (activity_id, user_id)
    )`);
};

//exports.down = (knex, Promise) => knex.schema.dropTable('interests');
exports.down = (knex, Promise) => knex.raw('DROP TABLE IF EXISTS interests CASCADE')
