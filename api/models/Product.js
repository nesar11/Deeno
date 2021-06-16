const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Product = new Schema({
  ProductName: {
    type: String
  },
  ProductDescription: {
    type: String
  },
  ProductPrice: {
    type: Number
  },
  StartDate: {
    type: String
  },
  EndDate: {
    type: String
  },
  Status: {
    type: String
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Product', Product);
