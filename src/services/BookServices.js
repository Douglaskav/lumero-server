const Book = require("../database/models/Book");
const Content = require("../database/models/Content");

class BookService {
	async create({
		title,
		synopsis,
		author,
		categories,
		audio_file,
		cover,
		text,
	}) {
		const book = await Book.build({
			title,
			synopsis,
			author,
			categories,
			audio_file,
			cover,
		});

		const content = await Content.build({
			content: text,
			BookId: book.dataValues.id,
		});

		await book.save();
		await content.save();

		return content;
	}
}

module.exports = new BookService();
