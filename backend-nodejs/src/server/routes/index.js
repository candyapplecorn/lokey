const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
/*

THIS MUST SERVE THE BUNDLE JS

*/


router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(2, 3, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});

module.exports = router;
