const multer = require("multer");
const path = require("path");

console.log(`${__dirname}/../assets/users/`);

const storageForUsers = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `${__dirname}/../assets/users/`);
	},

	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});

const storageForBooks = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `${__dirname}/../assets/books/`);
	},

	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});

const uploadUsers = multer({ storage: storageForUsers });
const uploadBooks = multer({ storage: storageForBooks });

module.exports = { uploadUsers, uploadBooks };
