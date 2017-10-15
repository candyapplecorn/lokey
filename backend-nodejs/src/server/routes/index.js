const express = require('express');
const knex = require('../db/connection');
const router = express.Router();

// bootstrap current user?
router.get('/', function (req, res, next) {
  const ro = {};
  var username = '', id = -1;

  if (req.user)
    username = req.user.username,
    id = req.user.id;

  const results = knex.raw(`
    SELECT *
    FROM users
    WHERE id = ?
  `, [id])
  .then(results => results.rows)
  .then(row => {
    console.log("row is:");
    console.log(row);

    ro.currentUser = JSON.stringify({ username, id, results, row }) || {}; // NEEDED FOR BOOTSTRAPPING THE CURRENT USER
    res.render('index', ro);
  })
  .catch(err => console.log(err))

});

module.exports = router;
