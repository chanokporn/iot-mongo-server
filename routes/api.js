var express = require('express')
var router = express.Router()
var iot = require('../models/app.schema.js')

//iot.methods(['get', 'put', 'post', 'delete'])
//iot.register(router, '/iot')

router.get('/iot', function (req, res, next) {
  iot.find({}).exec(function (err, results) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(results)
    }
  })
})

router.post('/iot', function (req, res, next) {
  var obj = new iot(req.body)
  obj.save(function (err, obj) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(obj)
    }
  })
})

module.exports = router
