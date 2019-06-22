var express = require('express')
var router = express.Router()

// define the users page route
router.get('/', function (req, res) {
  res.send({'message': 'Hooray Users works...!'})
})

module.exports = router
