const express = require('express');
const router = express.Router();

// bootstrap current user?
router.get('/', function (req, res, next) {
  const ro = {};
  ro.title = 'Welcome to Express!';
  res.render('index', ro);
});

module.exports = router;
