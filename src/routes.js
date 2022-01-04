const { Router } = require("express");
const verifyAuth = require("./middlewares/verifyAuth");

const router = Router();
const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController");

router.get("/", verifyAuth, (request, response) => {
	response.status(200).json({
		message: "You were able to access the restricted page successfully.",
	});
});

router.post("/user/create", UserController.createNewUser);
router.post("/user/auth", UserController.authUser);

router.post("/book/create", BookController.create);
router.post("/review/create", BookController.createReview);

module.exports = router;
