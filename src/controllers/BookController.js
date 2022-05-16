"use strict";

const BookService = require("../services/BookServices");

const _buildNewBook = async (Book) => await BookService.create(Book);
const _getBooks = async () => await BookService.index();
const _getBookDetail = async (book_id) => await BookService.indexById(book_id);
const _getBooksByCategory = async (book_category) => await BookService.indexByCategory(book_category);

exports.create = async (req, res) => {
	try {
		req.file ? (req.body.cover = req.file.path) : null;
		res.status(200).json(await _buildNewBook(req.body));
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
};

exports.index = async (req, res) => {
	try {
		res.status(200).json(await _getBooks());
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
};

exports.indexById = async (req, res) => {
	try {
		res.status(200).json(await _getBookDetail(req.params.book_id));
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
};

exports.indexByCategory = async (req, res) => {
	try {
		res.status(200).json(await _getBooksByCategory(req.params.book_category));
	} catch (err) {
		res.status(409).json({ error: err.message });
	}
}
