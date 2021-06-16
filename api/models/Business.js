var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Business  = new Schema({
  person_name: {
    type: String
  },
  business_name: {
    type: String
  },
  business_gst_number: {
    type: Number
  }
},{timestamps: true});

module.exports = mongoose.model('Business', Business);
