var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'AWS-Express' });
});

router.get('/getdata', function(req, res, next) {
  var name = '';
  if (req.query.name && req.query.name !== '') {
    name = req.query.name;
  }
  let data = {
    'API-Method': 'GET',
    'name': name,
    'data': req.body
  };
  res.send(data);
});

router.post('/postdata', function(req, res, next) {
  let data = {
    'API-Method': 'Post',
    'data': req.body
  };
  res.send(data);
});

module.exports = router
