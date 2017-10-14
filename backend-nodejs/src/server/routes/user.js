const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth_helpers');

/*

NEEDZ 2 G0000

*/

router.get('/user', authHelpers.loginRequired, (req, res, next)  => {
  handleResponse(res, 200, 'success');
  //authHelpers.pingUser(res, 200, user)
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router;
