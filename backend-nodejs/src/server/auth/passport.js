const passport = require('passport');
const knex = require('../db/connection');

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    knex('users').where({id}).first()
    .then((user) => {
      console.log('deserializeUser')
      console.log(user)
      
      done(null, user);
    })
    .catch((err) => { done(err, null); });
  });

};
