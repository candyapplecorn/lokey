const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('users').del()
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('mochapie', salt);
    return Promise.join(
      knex('users').insert({
        username: 'renaldo',
        password: hash
      })
    );
  })
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('apples1gyy', salt);
    return Promise.join(
      knex('users').insert({
        username: 'barbara',
        password: hash
      })
    );
  });
};
