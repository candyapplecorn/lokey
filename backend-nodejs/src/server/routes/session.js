const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth_helpers');
const passport = require('../auth/local');

router.post('', authHelpers.loginRedirect, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { handleResponse(res, 500, 'error'); }
    if (!user) { handleResponse(res, 404, 'User not found'); }
    if (user) {
      req.logIn(user, function (error) {
        if (error) handleResponse(res, 500, 'error');
        pingUser(res, 200, user);
      });
    }
  })(req, res, next);
});

router.delete('', authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  pingUser(res, 200, {});
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

function pingUser(res, code, user){
  res.status(code).json(user);
}

module.exports = router;
