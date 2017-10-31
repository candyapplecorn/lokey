const knex = require('../db/connection');

// Returns a promise, the .then will have the activities array
function INDEX(){
  return knex('activities')
  .select('id', 'name')
<<<<<<< HEAD
  .map(row => row.name)
=======
  .map(row => row.name);
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
}

module.exports = {
  INDEX
};
