const Book = require("../database/models/Book");

class BookService {
  async create(book) {
    const newBook = await Book.create(book);

    return newBook;
  }

  async getAll() {
    return await Book.findAll();
  }
}

module.exports = new BookService();
