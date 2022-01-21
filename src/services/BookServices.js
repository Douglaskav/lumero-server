const Book = require("../database/models/Book");

class BookService {
  async create(book) {
    const newBook = await Book.create(book);

    return newBook;
  }

  async getAll() {
    const book = await Book.findAll();

    console.log(book);
  }
}

module.exports = new BookService();
