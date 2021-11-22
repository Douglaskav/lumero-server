const NodeEnvironment = require("jest-environment-node");
const { execSync } = require("child_process");
const { resolve } = require("path");

const sequelize_cli = "./node_modules/sequelize-cli/lib/sequelize";
require("dotenv").config({
	path: resolve(__dirname, "..", "..", ".env.dev"),
});

class CustomEnvironment extends NodeEnvironment {
	constructor(config) {
		super(config);
	}

	setup() {
		execSync(`${sequelize_cli} db:migrate:undo:all`);
		execSync(`${sequelize_cli} db:migrate`);
	}
}

module.exports = CustomEnvironment;
