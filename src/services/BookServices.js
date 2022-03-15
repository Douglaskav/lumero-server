const Book = require("../database/models/Book");
const Sequelize = require("sequelize");

exports.create = async (book) => {
	return await Book.create(book);
};

exports.index = async () => {
	let limit = Math.floor(Math.random() * (7 - 3) + 3);
	return await Book.findAll({ order: [Sequelize.literal("random()")], limit });
};

exports.indexById = async (book_id) => {
	return await Book.findOne({
		where: { id: book_id },
	});
};
