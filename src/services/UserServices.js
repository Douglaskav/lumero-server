const User = require("../database/models/User");
const bcrypt = require("bcrypt");

class UserServices {
  async create(user) {
    const userAlreadyExists = await User.findOne({
      where: { email: user.email },
    });

    user.password = await bcrypt.hashSync(user.password, 10);

    if (userAlreadyExists) throw new Error("User already exists!");

    const newUser = await User.create(user);

    return newUser;
  }
}

module.exports = new UserServices();
