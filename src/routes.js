const { Router } = require("express");
const verifyAuth = require("./middlewares/verifyAuth");
const router = Router();

const {
	UserController,
	BookController,
	ReviewController,
} = require("./controllers");

const { uploadBooks } = require("./middlewares/uploadImages");

router.get("/user/a", (req, res) => {
	return res.json({ message: "Hello World!"});
});

router.post("/user/create", UserController.create);
router.post("/user/auth", UserController.authenticate);

router.post("/book/create", uploadBooks.single("cover"), BookController.create);
router.post("/review/create", ReviewController.create);

module.exports = router;
