const bcrypt = require('bcryptjs');
const knex = require('../db/connection');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req, res) {
  return handleErrors(req)
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    return knex('users')
    .insert({
      username: req.body.username,
<<<<<<< HEAD
=======
      email: req.body.email || "",
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
      password: hash
    })
    .returning('*');
  })
  .catch((err) => {
<<<<<<< HEAD
    res.status(400).json([err.message]);
=======
    res.status(400).json(err);
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
  });
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json(['Please log in']);
  return next();
}

function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json(
    ['You are already logged in']);
  return next();
}

function handleErrors(req) {
  const MIN_USERNAME_LENGTH = 3;
  const MIN_PASSWORD_LENGTH = 6;
  return new Promise((resolve, reject) => {
    if (req.body.username.length < MIN_USERNAME_LENGTH)
      reject(
        [`Username must be longer than ${MIN_USERNAME_LENGTH} characters`]
      );
    else if (req.body.password.length < 6)
      reject(
        [`Password must be longer than ${MIN_PASSWORD_LENGTH} characters`]
      );
    else
      resolve();
  });
}

function pingUser(res, code, user){
  res.status(code).json(user);
}

module.exports = {
  comparePass,
  createUser,
  loginRequired,
  loginRedirect,
  pingUser
};
