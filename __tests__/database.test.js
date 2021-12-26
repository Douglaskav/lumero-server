/**
 * @jest-environment ./src/config/jest-custom-enviroment
 */

const connection = require("../src/database/index");

describe("#testing database", () => {
  it("Should test the connection if database it's ok", async () => {
    await connection.authenticate();
    expect("Executing (default): SELECT 1+1 AS result");
  });
});
