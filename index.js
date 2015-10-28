var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('porpai')

})

app.listen(3000)
console.log('test finis')
