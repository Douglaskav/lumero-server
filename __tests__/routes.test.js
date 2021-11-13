/**
 * @jest-environment ./src/config/jest-custom-enviroment
 */

const request = require("supertest");
const app = require("../src/app");
const connection = require("../src/database/index");
const User = require("../src/database/models/User");
const jwt = require("jsonwebtoken");

async function generateNewTokenUserAuth() {
	const user = await User.findOne({ where: { email: "test@test.com" } });

	const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
		expiresIn: 60 * 60, // 3.6 sec
	});

	return token;
}

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
