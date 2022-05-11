const Sequelize = require("sequelize");
const Book = require("../database/models/Book");
const Review = require("../database/models/Reviews");
const User = require("../database/models/User");

exports.create = async (book) => {
	if (book.title) return await Book.create(book);

	throw new Error("The book need a title");
};

exports.index = async () => {
	// Returns a random integer from 3 to 7:
	let limit = Math.floor(Math.random() * (7 - 3) + 3);

	return await Book.findAll({ order: [Sequelize.literal("random()")], limit });
};

exports.indexById = async (id) => {
	let book_detail = await Book.findOne({
		where: { id },
		include: {
			model: Review,
			limit: 3,
			include: {
				model: User,
			},
		},
	});

	if (!book_detail) throw new Error("The book doesn't exists!");

	return book_detail;
};
