const UserService = require("../services/UserServices");
const bcrypt = require("bcrypt");

class UserController {
	async create(request, response) {
		const { username, email, password, photoPath } = request.body;

		const user = await UserService.create({
			username,
			email,
			password,
			photoPath,
		});

		return response.json(user);
	}

	async auth(request, response) {}
}

module.exports = new UserController();
