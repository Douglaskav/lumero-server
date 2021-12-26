const UserService = require("../services/UserServices");

class UserController {
  async create(request, response) {
    const {
      username,
      email,
      password,
      image,
      alreadyReadedBooks,
      currentReadingBooks,
      favoritesBooks,
    } = request.body;

    const user = await UserService.create({
      username,
      email,
      password,
      image,
      alreadyReadedBooks,
      currentReadingBooks,
      favoritesBooks,
    });

    return response.json(user);
  }

  async auth(request, response) {
    const { email, password } = request.body;

    const authenticatedUser = await UserService.auth({ email, password });
    return response.status(200).json(authenticatedUser);
  }
}

module.exports = new UserController();
