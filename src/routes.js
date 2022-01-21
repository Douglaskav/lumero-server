const { Router } = require("express");
const verifyAuth = require("./middlewares/verifyAuth");
const router = Router();

const path = require("path");

const multer = require("multer");

const storageForUsers = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/assets/users/`);
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
    cb(null, `${__dirname}/assets/books/`);
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

const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController");
const ReviewController = require("./controllers/ReviewController");

router.get("/", verifyAuth, (request, response) => {
  response.status(200).json({
    message: "You were able to access the restricted page successfully.",
  });
});

router.post(
  "/user/create",
  uploadUsers.single("image"),
  UserController.createNewUser
);
router.post("/user/auth", UserController.authUser);

router.post(
  "/book/create",
  uploadBooks.single("cover"),
  BookController.createNewBook
);
router.get("/book/getall", BookController.getAll);

router.post("/review/create", ReviewController.createNewReview);

module.exports = router;
