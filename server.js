var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express()


mongoose.connect('mongodb://localhost/db')
 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('porpai')

})

app.listen(3000)
console.log('run in 3000')
