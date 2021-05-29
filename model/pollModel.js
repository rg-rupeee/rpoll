const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      trim: true,
      requied: true,
    },
    noOptions: {
      type: Number,
      requied: true,
    },
    options: [
      {
        type: String,
        trim: true,
      },
    ],
    voteCnt: {
      type: Number,
      requied: true,
      default: 0,
    },
    votes: [
      {
        type: Number, 
      },
    ],
    creater: {
      type: String,
      trim: true,
      required: true,
    },
    uuid: {
      type: String,
      requied: true,
    },
  },
  { timestamps: true }
);

pollSchema.index({uuid: 1});

const Poll = mongoose.model("Poll", pollSchema);
module.exports = Poll;
