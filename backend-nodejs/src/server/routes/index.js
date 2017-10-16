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
    SELECT a.name AS activity, a.id AS activity_id
    FROM users u
    JOIN interests i
    ON i.user_id = u.id
    JOIN activities a
    ON i.activity_id = a.id
    WHERE u.id = ?
  `, [id])
  .then(results => results.rows)
  .then(row => {
    ro.currentUser = req.user ? JSON.stringify({
      username,
      id,
      activities: row//.map(r => r.activity)
    }) : 'null'; // NEEDED FOR BOOTSTRAPPING THE CURRENT USER

    res.render('index', ro);
  })
  /*.catch(err => conso*//*le.log(err))*/

});

module.exports = router;
