const Review = require("../database/models/Reviews");

class ReviewService {
  async create({ content, stars, BookId, UserId }) {
    if (!content && !stars) {
      throw new Error("please fill the fields");
    }

    // Verify if the book_id exists you need create a route to it
    // Verify if the user_id exists you need create a route to it

    const newReview = await Review.create({
      content,
      stars,
      BookId,
      UserId,
    });

    return newReview;
  }
}

module.exports = new ReviewService();
