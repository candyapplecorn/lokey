const express = require('express');
const router = express.Router();
const ActivitiesController = require('../controllers/activities');

router.get('', (req, res, next)  => {
  return ActivitiesController.INDEX().then((data) => {
    res.status(200).json(data);
  })
  .catch(err => handleError(res, 500, err));
});

function handleError(res, code, err) {
  res.status(code).json({ err });
}

module.exports = router;
