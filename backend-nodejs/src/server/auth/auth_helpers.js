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
      email: req.body.email || "",
      password: hash
    })
    .returning('*');
  })
  .catch((err) => {
    res.status(400).json(err); // [err.message] ?
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
