var restful = require('node-restful')
var mongoose = restful.mongoose

var iot = new mongoose.Schema({
  iot_id: Number,
  temperature: Number,
  timestamp: {type: Date, default: Date.now},
  relative_humidity: Number

})

module.exports = restful.model('iot', iot)
