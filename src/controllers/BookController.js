const BookService = require("../services/BookServices");

class BookController {
	async create(request, response) {
		const book = request.body;

		const newBook = await BookService.create(book);

		return response.json(newBook);
	}
}

module.exports = new BookController();
