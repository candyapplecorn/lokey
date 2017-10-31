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
<<<<<<< HEAD
        authHelpers.pingUser(res, 200, user)
=======
        authHelpers.pingUser(res, 200, user);
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1

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
<<<<<<< HEAD
  res.status(code).json({ err });
=======
  res.status(code).json([err]);
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
}

module.exports = router;
