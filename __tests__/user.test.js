/**
 * @jest-environment ./src/config/jest-custom-enviroment
 */

const request = require("supertest"),
  app = require("../src/app"),
  connection = require("../src/database/index");

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

describe("#tests for books endpoint's", () => {
  it("should be able to create a new book", async () => {
    const response = await request(app)
      .post("/book/create")
      .send({
        title: "A book",
        synopsis: "this is the synopsis of the book",
        author: "test",
        categories: ["test", "development", "creation"],
        audio_file: "/test/book.mp3",
        cover: "/test/cover.jpg",
        text: "The content of the book",
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("content");
    expect(response.body).toHaveProperty("BookId");
  });
});

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

beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  connection.close();
  done();
});
