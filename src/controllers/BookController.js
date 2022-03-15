"use strict";

const BookService = require("../services/BookServices");

const _buildNewBook = async (Book) => await BookService.create(Book);
const _getBooks = async (Book) => await BookService.index();
const _getBookDetail = async (book_id) => await BookService.indexById(book_id);

exports.create = async (req, res) => {
	try {
		req.file ? (req.body.cover = req.file.path) : "";
		res.json(await _buildNewBook(req.body));
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
};

exports.index = async (req, res) => {
	try {
		res.json(await _getBooks());
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
}

exports.indexById = async (req, res) => {
	try {
		res.json(await _getBookDetail(req.params.book_id));
	} catch (err) {
		res.status(409).json({error: err.message });
	}
}
