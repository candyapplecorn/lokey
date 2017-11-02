const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth_helpers');
const InterestsController = require('../controllers/interests');
const ROOTURL = "/:user_id/interests";

router.get(ROOTURL, authHelpers.loginRequired, (req, res, next) => {
  return InterestsController.INDEX(req.user).then(function(interests){
    res.status(200).json(interests);
  })
  .catch(err => handleErrors(res, 500, err));
});

router.post(`${ROOTURL}/:activity_id`,
            authHelpers.loginRequired, (req, res, next) => {
  const { user_id, activity_id } = req.params;

  return InterestsController.CREATE({ user_id, activity_id })
  .then(function(interests){
    res.status(200).json(interests);
  })
  .catch(err => {
    handleErrors(res, 500, err);
  });
});

router.delete(`${ROOTURL}/:activity_id`,
            authHelpers.loginRequired, (req, res, next) => {
  const { user_id, activity_id } = req.params;

  return InterestsController.DESTROY({ user_id, activity_id })
  .then(function(interests){
    debugger;
    res.status(200).json(interests); // responds with 1, for number of rows deleted
  })
  .catch(err => {
    handleErrors(res, 500, err);
  });
});


function handleErrors(res, code, err) { res.status(code).json([err]); }

module.exports = router;
