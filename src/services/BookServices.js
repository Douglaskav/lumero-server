const Book = require("../database/models/Book");
const Content = require("../database/models/Content");

class BookService {
  async create(book) {
    const { title, synopsis, author, categories, audio_file, cover, text } =
      book;

    const bookBuild = await Book.build({
      title,
      synopsis,
      author,
      categories,
      audio_file,
      cover,
    });

    const content = await Content.build({
      content: text,
      BookId: bookBuild.dataValues.id,
    });

    await bookBuild.save();
    await content.save();

    return content;
  }

  async getAll() {
    return await Book.findAll();
  }
}

module.exports = new BookService();
