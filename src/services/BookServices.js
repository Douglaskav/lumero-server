const Book = require("../database/models/Book");

class BookService {
	async create(book) {
		console.log(book);
		return await Book.create(book);
	}
}

module.exports = new BookService();
