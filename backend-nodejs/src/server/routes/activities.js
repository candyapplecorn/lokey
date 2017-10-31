const express = require('express');
const router = express.Router();
const ActivitiesController = require('../controllers/activities');

router.get('', (req, res, next)  => {
  return ActivitiesController.INDEX().then((data) => {
<<<<<<< HEAD
    res.status(200).json(data)
  })
  .catch(err => handleError(res, 500, err))
=======
    res.status(200).json(data);
  })
  .catch(err => handleError(res, 500, err));
>>>>>>> 302feb9648aff4b23ce0955bf2e90d75f020d3d1
});

function handleError(res, code, err) {
  res.status(code).json({ err });
}

module.exports = router;
