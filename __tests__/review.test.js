const request = require("supertest"),
	app = require("../src/app"),
	connection = require("../src/database/index");

describe("#tests for review endpoint's", () => {
	it("Create a test for review creation", async () => {
		const response = await request(app).post("/review/create").send({
			content: "This is a test review",
			stars: 5.0,
			BookId: "e2c8a4a6-5af8-4ae3-9215-8a8ad5859eaa",
			UserId: "3b197129-0aab-4461-bf5c-e3197492ec15",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("id");
	});
});
