"use strict";

const ReviewService = require("../services/ReviewServices");

const _buildNewReview = async (Review) => await ReviewService.create(Review);

exports.create = async (req, res) => {
	try {
		res.json(await _buildNewReview(req.body));
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};
