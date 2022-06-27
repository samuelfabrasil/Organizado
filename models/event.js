const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creator:{
    type: Number,
    required: true
  },
  start: {
    type: Date,
    required: true,
    default: Date.now
  },
  end: {
    type: Date,
    required: true,
    default: Date.now
  },
  localization:{
    type: Map,
    required: true
  },
  description:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)