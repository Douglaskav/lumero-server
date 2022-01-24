const { Router } = require("express");
const verifyAuth = require("./middlewares/verifyAuth");
const router = Router();

const {
	UserController,
	BookController,
	ReviewController,
} = require("./controllers");

const { uploadUsers, uploadBooks } = require("./middlewares/uploadImages");

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
router.post("/review/create", ReviewController.createNewReview);

module.exports = router;
