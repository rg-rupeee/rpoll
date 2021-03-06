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
	try {
		// console.log(req.params.uuid);
		const poll = await Poll.findOne({ uuid: req.params.uuid });
		if (!poll) {
			return res.json({
				error: "NO poll found with this id",
			});
		}
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

exports.vote = async (req, res) => {
	try {
		const op = parseInt(req.query.vote);
		console.log(op);

		const poll = await Poll.findOne({ uuid: req.params.uuid });

		// check if op is in range
		if ((!op && op !== 0) || op < 0 || op >= poll.noOptions) {
			return res.json({
				status: "fail",
				message: "option you have chosen is not defined",
			});
		}

		poll.votes[op] = poll.votes[op] + 1;
		poll.voteCnt = poll.voteCnt + 1;
		// increment voteCnt and vote of op option
		const updatedPoll = await Poll.findOneAndUpdate(
			{ uuid: poll.uuid },
			{
				voteCnt: poll.voteCnt,
				votes: poll.votes,
			},
			{ new: true }
		);

		console.log(poll);

		return res.json({
			status: "success",
			data: updatedPoll,
		});
	} catch (err) {
		console.log(err);
		return res.json({
			status: "fail",
			data: err,
		});
	}
};
