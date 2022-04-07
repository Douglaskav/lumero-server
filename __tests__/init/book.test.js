const request = require("supertest"),
	app = require("../../src/app");

const imagetest = __dirname + "/../../src/assets/books/test/cover.png";

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

	it("should return an error", async () => {

		const response = await request(app)
			.post("/book/create")
			.field("title", "")
			.field("synopsis", "")
			.field("content", "")
			.field("author", "")
			.field("categories", "['test', 'development', 'creation']")
			.field("language", "")
			.field("pages", 1)
			.field("time", "03:23:29")
			.field("audio_files", "/test/book.mp3")
			.attach("cover", imagetest);

		expect(response.statusCode).toBe(409);
		expect(response.body.error).toBe("The book need a title");
	});

	it("should return random books", async () => {
		const response = await request(app).get("/book/list")	;

		expect(response.statusCode).toBe(200);
	});

	it("should return detail of a specific book", async () => {
		let book_id = "944484bc-9563-47d5-863e-8bfbc3234d7c";

		const response = await request(app).get(`/book/profile/${book_id}`);

		expect(response.statusCode).toBe(200);
	});

	it("should return a error because the book_id is invalid", async () => {
		let book_id = "e0000000-e000-0000-ee00-eee0eee0e0e0";

		const response = await request(app).get(`/book/profile/${book_id}`);

		expect(response.statusCode).toBe(409);
		expect(response.body.error).toBe("The book doesn't exists!");
	});
});
