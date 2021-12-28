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

	async createReview(request, response) {
		const { content, stars, BookId, UserId } = request.body;

		const review = await BookService.createReview({
			content,
			stars,
			BookId,
			UserId,
		});

		return response.json(review);
	}
}

module.exports = new BookController();
