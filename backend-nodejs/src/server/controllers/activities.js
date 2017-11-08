const knex = require('../db/connection');

// Returns a promise, the .then will have the activities array
function INDEX(){
  return knex('activities')
  .select('id', 'name')
  .map(row => row.name);
}

function CREATE(activityName){
  return knex('activities')
  .insert({ name: activityName })
  .returning('*')
  .reduce((acc, e) => {
    const { id, name } = e;
    return { id, name };
  }, {});
}

function DESTROY(activityName){
  return knex('activities')
  .where({ name: activityName })
  .del()
  .returning('*')
  .then(data => {
    const { id, name } = data[0];
    return { id, name };
  });
}

module.exports = {
  INDEX,
  CREATE,
  DESTROY
};
