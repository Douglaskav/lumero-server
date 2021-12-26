const BookService = require("../services/BookServices");

class BookController {
	async create(request, response) {
		const { title, synopsis, author, categories, audio_file, cover, content } =
			request.body;

		const newBook = await BookService.create({
			title,
			synopsis,
			author,
			categories,
			audio_file,
			cover,
			content,
		});

		return response.json(newBook);
	}
}

module.exports = new BookController();
