"use strict";

const ReviewService = require("../services/ReviewServices");

const _buildNewReview = async (Review) => await ReviewService.create(Review);
const _indexByUserId = async (user_id) => await ReviewService.indexByUserId(user_id);

exports.create = async (req, res) => {
	try {
		res.json(await _buildNewReview(req.body));
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
};

exports.indexByUserId = async (req, res) => {
	try {
		res.json(await _indexByUserId(req.params.user_id));
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
}
