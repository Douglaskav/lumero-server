"use strict";

const ReviewService = require("../services/ReviewServices");

class ReviewController {
  createNewReview = async (req, res) => {
    try {
      res.json(await this.generateANewReviews(req.body));
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };

  generateANewReviews = async (Review) => await ReviewService.create(Review);
}

module.exports = new ReviewController();
