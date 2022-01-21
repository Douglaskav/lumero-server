"use strict";

const BookService = require("../services/BookServices");

class BookController {
  createNewBook = async (req, res) => {
    req.body.cover = req.file.path;
    console.log(req.body);
    res.json(await this.generateANewBook(req.body));
  };

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

  async getAll(request, response) {
    return response.json(await BookService.getAll());
  }

  generateANewBook = async (Book) => await BookService.create(Book);
}

module.exports = new BookController();
