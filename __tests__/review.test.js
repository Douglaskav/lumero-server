const request = require("supertest"),
	app = require("../src/app"),
	connection = require("../src/database/index");

describe("#tests for review endpoint's", () => {
	it("Create a test for review creation", async () => {
		const response = await request(app).post("/review/create").send({
			content: "This is a test review",
			stars: 5.0,
			BookId: "944484bc-9563-47d5-863e-8bfbc3234d7c",
			UserId: "3b197129-0aab-4461-bf5c-e3197492ec15",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("id");
	});
});
