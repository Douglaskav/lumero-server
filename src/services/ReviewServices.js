const Review = require("../database/models/Reviews");
const User = require("../database/models/User");
const Book = require("../database/models/Book");

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

exports.indexByUserId = async (UserId) => {
	if (!UserId) throw new Error("Without userid");

	let last3Reviews = await Review.findAll({
		where: { UserId },
		limit: 3,
		order: [["createdAt", "DESC"]],
		include: [
			{ model: User, attributes: ["username", "image", "id"] },
			{ model: Book, attributes: ["title", "id"] },
		],
	});

	return { reviews: last3Reviews };
};
