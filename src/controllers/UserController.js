"use strict";

const UserService = require("../services/UserServices");

class UserController {
	createNewUser = async (req, res) => {
		try {
			req.file ? (req.body.image = req.file.path) : "";
			res.json(await this.generateANewUser(req.body));
		} catch (err) {
			res.status(409).json({ message: err.message });
		}
	};

	authUser = async (req, res) => {
		try {
			res.json(await this.authenticateTheUser(req.body));
		} catch (err) {
			res.status(401).json({ message: err.message });
		}
	};

	generateANewUser = async (User) => await UserService.create(User);

	authenticateTheUser = async (UserCredentials) =>
		await UserService.auth(UserCredentials);
}

module.exports = new UserController();
