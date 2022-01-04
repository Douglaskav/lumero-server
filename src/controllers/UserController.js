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

    try {
      const user = await UserService.create({
        username,
        email,
        password,
        image,
        alreadyReadedBooks,
        currentReadingBooks,
        favoritesBooks,
      });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(404).json({ message: err.message });
    }
  }

  async auth(request, response) {
    const { email, password } = request.body;

    try {
      const authenticatedUser = await UserService.auth({ email, password });
      return response.status(200).json(authenticatedUser);
    } catch (err) {
      return response.status(401).json({ message: err.message });
    }
  }
}

module.exports = new UserController();
