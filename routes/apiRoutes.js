const express = require("express");
const router = express.Router();

const pollController = require("./../controller/pollController");

/**
 * Create Poll
 * Get Poll
 * Vote for poll
 */

// create poll
router.route("/").post(pollController.createPoll);

// get poll info
// vote
router.route("/:uuid").get(pollController.getPoll).patch(pollController.vote);

module.exports = router;
