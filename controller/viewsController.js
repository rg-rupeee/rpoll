const Poll = require("./../model/pollModel");

exports.indexPage = (req, res) => {
	return res.render("index");
};

exports.resultPage = async (req, res) => {
	try {
		const { uuid } = req.params;
		const poll = await Poll.findOne({ uuid });
		if (!poll) {
			return res.json({
				status: "fail",
				message: "No poll found with this id",
			});
		}
		console.log(poll);
		return res.render("result", { poll: poll });
	} catch (err) {
		console.log(err);
		return res.json({
			message: "some error occured at our end",
			error: err,
		});
	}
};

exports.votePage = async (req, res) => {
	try {
		const { uuid } = req.params;
		const poll = await Poll.findOne({ uuid });
		if (!poll) {
			return res.json({
				status: "fail",
				message: "No poll found with this id",
			});
		}
		console.log(poll);
		return res.render("vote", { poll: poll });
	} catch (err) {
		console.log(err);
		return res.json({
			message: "some error occured at our end",
			error: err,
		});
	}
};
