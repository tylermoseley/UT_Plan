var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let title = 'Degree Planner'
  let vartest = 'tyler';
  res.render('index', {title, vartest})
  // optional syntax: res.render('index', { title: 'Express' });
});

module.exports = router;
