"use strict";

const UserService = require("../services/UserServices");

const _buildNewUser = async (User) => await UserService.create(User);
const _buildNewAuthToken = async (UserCredentials) =>
	await UserService.auth(UserCredentials);

exports.create = async (req, res) => {
	try {
		req.file ? (req.body.image = req.file.path) : "";
		res.json(await _buildNewUser(req.body));
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};

exports.authenticate = async (req, res) => {
	try {
		res.json(await _buildNewAuthToken(req.body));
	} catch (err) {
		res.status(401).json({ message: err.message });
	}
};
