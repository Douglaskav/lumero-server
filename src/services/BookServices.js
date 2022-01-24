const Book = require("../database/models/Book");

exports.create = async (book) => {
	return await Book.create(book);
};
