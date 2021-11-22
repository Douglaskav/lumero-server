const User = require("../database/models/User");
const jwt = require("jsonwebtoken");

async function generateNewTokenUserAuth() {
	const user = await User.findOne({ where: { email: "test@test.com" } });

	const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
		expiresIn: 60 * 60, // 3.6 sec
	});

	return token;
}

module.exports = generateNewTokenUserAuth;
