/**
 * @jest-environment ./src/config/jest-custom-enviroment
 */

const request = require("supertest");
const app = require("../src/app");

const generateNewTokenUserAuth = require("../src/helpers/generateNewTokenUserAuth");

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

	it("should test the middleware that verify the token", async () => {
		const token = await generateNewTokenUserAuth();

		const response = await request(app)
			.get("/")
			.set("authorization", `Bearer ${token}`);

		if (response.statusCode != 200) {
			throw new Error(`ERROR ${response.status}: Invalid token!`);
		}

		expect(response.statusCode).toBe(200);
		expect(response.body).toStrictEqual({
			message: "You were able to access the restricted page successfully.",
		});
	});
});
