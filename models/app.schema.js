var restful = require('node-restful')
var mongoose = restful.mongoose

var iott = new mongoose.Schema({
  iot_id: String,
  temperature: String,
  timestamp: String,
  relative_humidity: String

})

module.exports = restful.model('iott', iott)
