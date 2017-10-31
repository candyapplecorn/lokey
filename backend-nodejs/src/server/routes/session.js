const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth_helpers');
const passport = require('../auth/local');

router.post('', authHelpers.loginRedirect, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
<<<<<<< HEAD
    if (err) { handleResponse(res, 500, 'error'); }
    if (!user) { handleResponse(res, 404, 'User not found'); }
    if (user) {
      req.logIn(user, function (error) {
        if (error) handleResponse(res, 500, 'error');
=======
    if (err) { handleErr(res, 500, err); }
    if (!user) { handleErr(res, 401, 'User not found'); }
    if (user) {
      req.logIn(user, function (error) {
        if (error) handleErr(res, 500, 'error');
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
        authHelpers.pingUser(res, 200, user);
      });
    }
  })(req, res, next);
});

router.delete('', authHelpers.loginRequired, (req, res, next) => {
<<<<<<< HEAD
  const user = req.user
  req.logout();
  // the passport middleware sets req.user to null
  authHelpers.pingUser(res, 200, user || {}); // Response should respond with empty json
=======
  const user = req.user;
  req.logout();
  // the passport middleware sets req.user to null
  authHelpers.pingUser(res, 200, user || {}); // should respond w/ empty
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
                                       // ...but it just responds 200 ok
  // TESTING REVEALS:
  /*
    If an empty object(data) is sent to req.status(code).json(data)
    THEN there will be no response body.

    HOWEVER if a key is added to data, then json will be set.
    SINCE logout doesn't care about response, it's okay to
    respond with empty data
  */
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}
<<<<<<< HEAD
=======
function handleErr(res, code, statusMsg) {
  res.status(code).json([statusMsg]);
}
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1

module.exports = router;
