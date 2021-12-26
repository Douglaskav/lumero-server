const jwt = require("jsonwebtoken");

async function verifyAuth(request, response, next) {
	const { authorization } = request.headers;

	if (!authorization)
		return response
			.status(401)
			.json({ message: "You Don't have access to this page." });

	const token = authorization.replace("Bearer", "").trim();

	try {
		const data = jwt.verify(token, process.env.JWT_SECRET);
		const { id } = data;

		request.userId = id;
		return next();
	} catch {
		return response.status(401).json({ message: "Invalid token!" });
	}
}

module.exports = verifyAuth;
