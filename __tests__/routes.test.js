/**
 * @jest-environment ./src/config/jest-custom-enviroment
 */

const request = require("supertest");
const app = require("../src/app");
const connection = require("../src/database/index");
const jwt = require("jsonwebtoken");

describe("#testing database", () => {
	it("Should test the connection if database it's ok", async () => {
		await connection.authenticate();
		expect("Executing (default): SELECT 1+1 AS result");
	});
});

describe("#tests for users endpoint", () => {
	it("should be able to create a new user", async () => {
		const response = await request(app).post("/user/create").send({
			username: "Test",
			email: "test@test.com",
			password: "test",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("id");
	});

	it("should test the authentication of the user", async () => {
		const response = await request(app).post("/user/auth").send({
			email: "test@test.com",
			password: "test",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("token");
		expect(response.body).toHaveProperty("user");
	});
});

describe("#authentication", () => {
	it.todo("will test if the token is valid");
});
