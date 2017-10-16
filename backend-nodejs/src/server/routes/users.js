const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth_helpers');
const passport = require('../auth/local');

router.post('', authHelpers.loginRedirect, (req, res, next)  => {
  return authHelpers.createUser(req, res)
  .then((response) => {
    passport.authenticate('local', (err, user, info) => {
      if (user) {
        // Set the response's JSON to the user's fields.
        authHelpers.pingUser(res, 200, user)

        // Set the server's session's currentUser field to this user.
        // setCurrentUser(req, user)
        // Unnecessary cuz passport sets req.user
        // conso//le.log(req.user)
      }
    })(req, res, next);
  })
  .catch((err) => { handleErrors(res, 500, err); });
});

function handleErrors(res, code, err) {
  // Send errors as an array of strings.
  res.status(code).json({ err });
}

module.exports = router;
