const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth_helpers');
const passport = require('../auth/local');

router.post('', authHelpers.loginRedirect, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { handleErr(res, 500, err); }
    if (!user) { handleErr(res, 401, 'User not found'); }
    if (user) {
      req.logIn(user, function (error) {
        if (error) handleErr(res, 500, 'error');
        authHelpers.pingUser(res, 200, user);
      });
    }
  })(req, res, next);
});

router.delete('', authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  // the passport middleware sets req.user to null
  authHelpers.pingUser(res, 200, req.user || {});

});

function handleErr(res, code, statusMsg) {
  res.status(code).json([statusMsg]);
}

module.exports = router;
