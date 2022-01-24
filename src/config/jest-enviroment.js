const NodeEnvironment = require("jest-environment-node");
const { execSync } = require("child_process");
const { resolve } = require("path");

const sequelize_cli = "./node_modules/sequelize-cli/lib/sequelize";
require("dotenv").config({
	path: resolve(__dirname, "..", "..", ".env.dev"),
});

const sequelize = require("../database/");

class CustomEnvironment extends NodeEnvironment {
	constructor(config) {
		super(config);
	}

	async setup() {
		await sequelize.sync({ force: true, logging: false });
		execSync(`${sequelize_cli} db:seed:all`);
	}
}

module.exports = CustomEnvironment;
