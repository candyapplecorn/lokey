const express = require('express');
const router = express.Router();
const ActivitiesController = require('../controllers/activities');

router.get('', (req, res, next)  => {
  // return authHelpers.createUser(req, res)
  // .then((response) => {
  //   passport.authenticate('local', (err, user, info) => {
  //     if (user) { handleResponse(res, 200, 'success'); }
  //   })(req, res, next);
  // })
  // .catch((err) => { handleResponse(res, 500, 'error'); });
  return ActivitiesController.INDEX().then((data) => {
    res.status(200).json(data)
  })
  .catch(err => handleError(res, 500, err))
});

// function handleResponse(res, code, statusMsg) {
//   res.status(code).json({status: statusMsg});
// }
function handleError(res, code, err) {
  res.status(code).json({ err });
}

module.exports = router;
