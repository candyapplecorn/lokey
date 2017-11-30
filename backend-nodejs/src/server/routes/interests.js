const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth_helpers');
const InterestsController = require('../controllers/interests');
const ROOTURL = "";

router.get(ROOTURL, authHelpers.loginRequired, (req, res, next) => {
  return InterestsController.INDEX(req.user).then(function(interests){
    res.status(200).json(interests);
  })
  .catch(err => handleErrors(res, 500, err));
});

router.post(`${ROOTURL}/:activity_id`,
            authHelpers.loginRequired, (req, res, next) => {
  const { activity_id } = req.params
  const user_id = req.user.id;

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
  const { activity_id } = req.params
  const user_id = req.user.id;

  return InterestsController.DESTROY({ user_id, activity_id })
  .then(function(interests){
    res.status(200).json(interests); // responds with 1, for number of rows deleted
  })
  .catch(err => {
    handleErrors(res, 500, err);
  });
});


function handleErrors(res, code, err) { res.status(code).json([err]); }

module.exports = router;
