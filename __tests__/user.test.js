/**
 * @jest-environment ./src/config/jest-custom-enviroment
 */

const request = require("supertest"),
  app = require("../src/app"),
  connection = require("../src/database/index");

const generateNewTokenUserAuth = require("../src/helpers/generateNewTokenUserAuth");

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

    expect();
  });
});

it.todo("Verify if the user not exists and return a error");
it.todo("Create a test for review creationg");
it.todo("Create test to verify errors like empty field");
it.todo("Verify if the review book_id is valid");
it.todo("Verify if the review user_id is valid");

beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  connection.close();
  done();
});
