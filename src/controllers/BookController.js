"use strict";

const BookService = require("../services/BookServices");

const _buildNewBook = async (Book) => await BookService.create(Book);

exports.create = async (req, res) => {
	try {
		req.file ? (req.body.cover = req.file.path) : "";
		res.json(await _buildNewBook(req.body));
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
};
