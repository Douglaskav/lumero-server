const User = require("../database/models/User"),
	bcrypt = require("bcrypt"),
	jwt = require("jsonwebtoken");

exports.create = async (user) => {
	const userAlreadyExists = await User.findOne({
		where: { email: user.email },
	});

	if (userAlreadyExists) throw new Error("User already exists!");

	user.password = bcrypt.hashSync(user.password, 10);
	const newUser = await User.create(user);

	return newUser;
};

exports.auth = async ({ email, password }) => {
	const user = await User.findOne({ where: { email } });
	if (!user) throw new Error("User not exists!");

	const isValidPassword = await bcrypt.compare(password, user.password);
	if (!isValidPassword) throw new Error("Password incorrect!");

	delete user.password;

	const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
		expiresIn: 60 * 60 * 24,
	});

	return { user, token };
};
