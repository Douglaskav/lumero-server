const { Router } = require("express");

const router = Router();
const UserController = require("./controllers/UserController");

router.get("/", (request, response) => {
	response.status(200).json({ message: "Hello World!" });
});

router.post("/user/create", UserController.create);

module.exports = router;
