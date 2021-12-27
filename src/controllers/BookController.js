const BookService = require("../services/BookServices");

class BookController {
	async create(request, response) {
		const { title, synopsis, author, categories, audio_file, cover, text } =
			request.body;

		const newBook = await BookService.create({
			title,
			synopsis,
			author,
			categories,
			audio_file,
			cover,
			text,
		});

		return response.json(newBook);
	}
}

module.exports = new BookController();
