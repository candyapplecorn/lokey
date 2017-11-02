const bcrypt = require('bcryptjs');
const knex = require('../db/connection');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

// https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function createUser(req, res) {
  return handleErrors(req)
  .then(() => {
    const { user: { username, password, email } } = req.body;
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    return knex('users')
    .insert({
      username: username,
      email: email || "",
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
  const { user: { username, password, email } } = req.body;

  return new Promise((resolve, reject) => {
    if (username.length < MIN_USERNAME_LENGTH)
      reject(
        [`Username must be longer than ${MIN_USERNAME_LENGTH} characters`]
      );
    else if (password.length < 6)
      reject(
        [`Password must be longer than ${MIN_PASSWORD_LENGTH} characters`]
      );
    else if (!validateEmail(email))
      reject(
        [`${email} is not a valid email`]
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
