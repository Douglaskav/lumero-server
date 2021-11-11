/**
 * @jest-environment ./src/config/jest-custom-enviroment
 */

const request = require("supertest");
const app = require("../src/app");
const connection = require("../src/database/index");

describe("#testing routes", () => {
	it("Should test the connection if database it's ok", async () => {
		await connection.authenticate();
		expect("Executing (default): SELECT 1+1 AS result");
	});

	it("should be able to create a new user", async () => {
		const response = await request(app).post("/user/create").send({
			username: "Test",
			email: "test@test.com",
			password: "test",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("id");
	});
});
