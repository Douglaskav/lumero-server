const request = require("supertest"),
	app = require("../src/app"),
	connection = require("../src/database/index");

const imagetest = __dirname + "/../src/assets/books/test/cover.jpg";

describe("#tests for users endpoint's", () => {
	it("should be able to create a new user", async () => {
		const response = await request(app).post("/user/create").send({
			username: "Test",
			email: "test@test.com",
			password: "test",
		});
		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("id");
	});

	it("should return a error when user already exists", async () => {
		const response = await request(app).post("/user/create").send({
			username: "Test",
			email: "test@test.com",
			password: "test",
		});

		expect(response.statusCode).toBe(409);
		expect(response.body).toStrictEqual({
			message: "User already exists!",
		});
	});
});

describe("#user authentication tests", () => {
	it("should test the authentication of the user", async () => {
		const response = await request(app).post("/user/auth").send({
			email: "test@test.com",
			password: "test",
		});

		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty("token");
		expect(response.body).toHaveProperty("user");
	});

	it("Verify if the password is incorrect and return error.", async () => {
		const response = await request(app).post("/user/auth").send({
			email: "test@test.com",
			password: "wrongPassword",
		});

		expect(response.statusCode).toBe(401);
		expect(response.body).toStrictEqual({
			message: "Password incorrect!",
		});
	});

	it("Verify if the user not exists and return a error", async () => {
		const response = await request(app).post("/user/auth").send({
			email: "user_that_not_exists@mail.com",
			password: "this_user_not_exists",
		});

		expect(response.statusCode).toBe(401);
		expect(response.body).toStrictEqual({
			message: "User not exists!",
		});
	});
});

beforeAll((done) => {
	done();
});

afterAll((done) => {
	// Closing the DB connection allows Jest to exit successfully.
	connection.close();
	done();
});
