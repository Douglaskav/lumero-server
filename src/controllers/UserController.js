"use strict";

const UserService = require("../services/UserServices");

const _buildNewUser = async (User) => await UserService.create(User);
const _buildNewAuthToken = async (UserCredentials) =>
	await UserService.auth(UserCredentials);
const _addBookToFavorites = async ({ BookId, UserId }) =>
	await UserService.addFavoriteBook({ BookId, UserId });
const _indexFavoriteBooks = async ({ user_id }) =>
	await UserService.indexFavoriteBooks({ user_id });

exports.create = async (req, res) => {
	try {
		res.json(await _buildNewUser(req.body));
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
};

exports.authenticate = async (req, res) => {
	try {
		res.json(await _buildNewAuthToken(req.body));
	} catch (err) {
		res.status(401).json({ error: err.message });
	}
};

exports.favoriteBook = async (req, res) => {
	try {
		res.json(await _addBookToFavorites(req.body));
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

exports.indexFavoriteBooks = async (req, res) => {
	try {
		res.json(await _indexFavoriteBooks(req.params));
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
};
