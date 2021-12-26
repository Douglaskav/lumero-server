const Book = require("../database/models/Book");

class BookService {
	async create({
		title,
		synopsis,
		author,
		categories,
		audio_file,
		cover,
		content,
	}) {
		return await Book.create({
			title,
			synopsis,
			author,
			categories,
			audio_file,
			cover,
		});
	}
}

module.exports = new BookService();
