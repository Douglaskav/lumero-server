const { Router } = require("express");
const router = Router();

const {
	UserController,
	BookController,
	ReviewController,
} = require("./controllers");

const { uploadBooks } = require("./middlewares/uploadImages");

router.post("/user/create", UserController.create);
router.post("/user/auth", UserController.authenticate);

router.post("/book/create", uploadBooks.single("cover"), BookController.create);

router.get("/book/list", BookController.index);
router.get("/book/profile/:book_id", BookController.indexById);

router.post("/review/create", ReviewController.create);

module.exports = router;
