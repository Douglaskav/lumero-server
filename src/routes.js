const { Router } = require("express");
const verifyAuth = require("./middlewares/verifyAuth");
const router = Router();

const {
	UserController,
	BookController,
	ReviewController,
} = require("./controllers");

const { uploadUsers, uploadBooks } = require("./middlewares/uploadImages");

router.post("/user/create", uploadUsers.single("image"), UserController.create);
router.post("/user/auth", UserController.authenticate);

router.post("/book/create", uploadBooks.single("cover"), BookController.create);
router.post("/review/create", ReviewController.create);

module.exports = router;
