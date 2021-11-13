const { Router } = require("express");
const verifyAuth = require("./middlewares/verifyAuth");

const router = Router();
const UserController = require("./controllers/UserController");

router.get("/", verifyAuth, (request, response) => {
	response
		.status(200)
		.json({
			message: "You were able to access the restricted page successfully.",
		});
});

router.post("/user/create", UserController.create);
router.post("/user/auth", UserController.auth);

module.exports = router;
