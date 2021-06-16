var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Coin = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{timestamps: true},
{ autoCreate: true, capped: 1024 });

module.exports = mongoose.model('Coin', Coin);
