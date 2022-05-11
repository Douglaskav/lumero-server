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
router.get("/user/favoriteBooks/:user_id", UserController.indexFavoriteBooks);
router.post("/user/addFavoriteBook", UserController.favoriteBook);

router.post("/book/create", uploadBooks.single("cover"), BookController.create);

router.get("/book/list", BookController.index);
router.get("/book/profile/:book_id", BookController.indexById);

router.post("/review/create", ReviewController.create);
router.get("/review/:user_id", ReviewController.indexByUserId);

module.exports = router;
