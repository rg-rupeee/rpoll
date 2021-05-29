const Poll = require("./../model/pollModel");
const { v4: uuid } = require("uuid");

exports.createPoll = async (req, res) => {
  try {
    const nullArr = [];
    for (let i = 0; i < req.body.options.length; i++) {
      nullArr.push(0);
    }
    let polldata = {
      question: req.body.question,
      noOptions: req.body.options.length,
      options: req.body.options,
      voteCnt: 0,
      votes: nullArr,
      creater: req.body.creater,
      uuid: uuid(),
    };
    const poll = await Poll.create(polldata);
    return res.json({
      status: "success",
      data: poll,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "fail",
      data: err,
    });
  }
};

exports.getPoll = async (req, res) => {
  try{
    // console.log(req.params.uuid);
    const poll = await Poll.findOne({uuid: req.params.uuid});
    return res.json({
      status: 'success',
      data: poll
    })
  }
  catch(err){
    console.log(err);
    return res.json({
      status: "fail",
      data: err,
    });
  }
};

exports.vote = async (req, res) => {};
