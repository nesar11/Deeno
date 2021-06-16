const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Project = new Schema({
  projectName: {
    type: String
  },
  story: {
    type: String
  },
  duration: {
    type: Number
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  status: {
    type: String
  },
},{
  timestamps:true
});

module.exports= mongoose.model('Project', Project)
