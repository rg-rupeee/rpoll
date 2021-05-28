const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema(
  {
    questions: {
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
        default: 0,
      },
    ],
    uuid: {
      type: String,
      requied: true,
    },
    creater: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const pollModel = mongoose.model("pollModel", pollSchema);
module.exports = pollModel;
