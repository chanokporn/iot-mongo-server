
var express = require('express')
var router = express.Router()
var model = require('../models/member.schema.js')

//iot.methods(['get', 'put', 'post', 'delete'])
//iot.register(router, '/iot')

router.get('/api/member', function (req, res, next) {
  model.find({}).exec(function (err, results) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(results)
    }
  })
})

router.post('/api/member', function (req, res, next) {
  var obj = new model(req.body)
  obj.save(function (err, obj) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(obj)
    }
  })
})

module.exports = router
