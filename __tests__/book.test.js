const request = require("supertest"),
	app = require("../src/app"),
	connection = require("../src/database/index");

const imagetest = __dirname + "/../src/assets/books/test/cover.png";

describe("#tests for books endpoint's", () => {
	it("should be able to create a new book", async () => {
		const response = await request(app)
			.post("/book/create")
			.field("title", "A book")
			.field("synopsis", "This is the synopsis of the book")
			.field("content", "This is the content of the book writted by test")
			.field("author", "Jest")
			.field("categories", "['test', 'development', 'creation']")
			.field("language", "English")
			.field("pages", 299)
			.field("time", "03:23:29")
			.field("audio_files", "/test/book.mp3")
			.attach("cover", imagetest);

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("content");
	});
});
