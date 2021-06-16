var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var AdUnit = new Schema({
  unit_name: {
    type: String
  },
  unit_price: {
    type: Number
  }
},{timestamps: true});

module.exports = mongoose.model('AdUnit', AdUnit);
