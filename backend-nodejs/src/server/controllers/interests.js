const knex = require('../db/connection');
const qs = require('querystring');

// const err = error => co/*n*/sole.log(error);

// Returns a promise, the .then will have the activities array
function INDEX(user){
  return knex.raw(`
    SELECT activities.name, activities.id
      FROM activities
    JOIN interests
      ON interests.activity_id = activities.id
    JOIN users
      ON users.id = interests.user_id
    WHERE users.id = ?
  `, [user.id])
  .then(({ rows }) =>
    rows.reduce((acc, e) =>
      ((acc[e.id] = e), acc)
    , {})
  );
}

function CREATE({ user_id, activity_id }){
  return knex('interests')
  .insert({ user_id, activity_id })
  .returning("*");
  //.catch(err)
}

function DESTROY({ user_id, activity_id }){
  return knex('interests')
  .where({ user_id, activity_id })
  .del();
  //.catch(err)
}

module.exports = {
  INDEX,
  CREATE,
  DESTROY
};
