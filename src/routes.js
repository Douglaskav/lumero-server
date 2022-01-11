const { Router } = require("express");
const verifyAuth = require("./middlewares/verifyAuth");

const router = Router();
const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController");
const ReviewController = require("./controllers/ReviewController");

router.get("/", verifyAuth, (request, response) => {
  response.status(200).json({
    message: "You were able to access the restricted page successfully.",
  });
});

router.post("/user/create", UserController.createNewUser);
router.post("/user/auth", UserController.authUser);

router.post("/book/create", BookController.createNewBook);
router.get("/book/getall", BookController.getAll);

router.post("/review/create", ReviewController.createNewReview);

module.exports = router;
