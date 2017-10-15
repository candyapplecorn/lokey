const express = require('express');
const router = express.Router();
const EventsController = require('../controllers/events');
const authHelpers = require('../auth/auth_helpers');

router.get('', (req, res, next)  => {
  // return authHelpers.createUser(req, res)
  // .then((response) => {
  //   passport.authenticate('local', (err, user, info) => {
  //     if (user) { handleResponse(res, 200, 'success'); }
  //   })(req, res, next);
  // })
  // .catch((err) => { handleResponse(res, 500, 'error'); });
  return EventsController.INDEX().then(({ rows }) => { // previously, was "data". raw returns an object with "rows" key
    res.status(200).json(
      rows.reduce((acc, e) => {
        (acc[e.id] = e);
        [e.lat, e.lng] = [e.lat, e.lng].map(Number)
        return acc;
      }, {})
    );
  })
  .catch(err => handleError(res, 500, err))
});

router.post('', authHelpers.loginRequired, (req, res, next)  => {
  return EventsController.CREATE(req).then((data) => {

    /* Take the array of events that's returned and turn it
       into a hash where the events' ids are the hash's keys */
    res.status(200).json(data)
  })
  .catch(err => handleError(res, 500, err))
});

//            vv req.params.id
router.delete('/:id', (req, res, next) => {
  return EventsController.DESTROY(req).then((data) => {

    /* Take the array of events that's returned and turn it
       into a hash where the events' ids are the hash's keys */
    res.status(200).json(data)
  })
  .catch(err => handleError(res, 500, err))
})

// function handleResponse(res, code, statusMsg) {
//   res.status(code).json({status: statusMsg});
// }
function handleError(res, code, err) {
  res.status(code).json({ err });
}

module.exports = router;
