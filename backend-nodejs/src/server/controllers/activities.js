const knex = require('../db/connection');

// Returns a promise, the .then will have the activities array
function INDEX(){
  return knex('activities').select('id', 'name')
  .map(row => row.name)
  // .then(as =>
  //   as.map(ao => a.name)
  // )
  //.catch(err => console.log(err))
}

module.exports = {
  INDEX
};
