const Review = require("../database/models/Reviews");

exports.create = async ({ content, stars, BookId, UserId }) => {
	if (!content && !stars && !BookId && !UserId) {
		throw new Error("please fill the fields");
	}

	return await Review.create({
		content,
		stars,
		BookId,
		UserId,
	});
};
