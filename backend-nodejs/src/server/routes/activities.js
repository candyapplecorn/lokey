const express = require('express');
const router = express.Router();
const ActivitiesController = require('../controllers/activities');

router.get('', (req, res, next)  => {
  return ActivitiesController.INDEX().then(data =>
    res.status(200).json(data)
  )
  .catch(err => handleError(res, 500, err));
});

router.post('/:activityName', (req, res, next)  => {
  const { activityName } = req.params;

  return ActivitiesController.CREATE(activityName).then(data => {
    res.status(200).json(data);
  })
  .catch(err => handleError(res, 500,
    err.code == '23505' ? // No, I specifically want ==. shut up ATOM
    `${activityName} already exists.` : err.detail)
  );
});

router.delete('/:activityName', (req, res, next)  => {
  const { activityName } = req.params;

  return ActivitiesController.DESTROY(activityName).then(data => {
    debugger;
    res.status(200).json(data);
  })
  .catch(err => {
    debugger;
    const errorCode = err.code == '23505' ? // No, I specifically want ==. shut up ATOM
    `${activityName} already exists.` :
    err.detail;

    handleError(res, 500, errorCode);
  });
});

function handleError(res, code, err) {
  res.status(code).json([ err ]);
}

module.exports = router;
