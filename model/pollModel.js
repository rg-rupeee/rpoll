const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  questions: {
    type: String,
  },
  noOptions: {  
    type: Number,
  }, 
  options: [{
    type: String,
  }],
  voteCnt: {
    type: Number,
  },  
  votes: [{
    type: Number,
  }], 
  uuid: {
    type: String
  },
  creater: {
    type: String
  }
}, {timestamps: true});

const pollModel = mongoose.model('pollModel', pollSchema);
module.exports = pollModel;