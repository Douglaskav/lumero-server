const User = require("../database/models/User"),
	Book = require("../database/models/Book"),
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

exports.addFavoriteBook = async ({ BookId, UserId }) => {
	const user = await User.findOne({ where: { id: UserId } });
	const bookExists = await Book.findOne({ where: { id: BookId } });

	if (!bookExists) throw new Error("O livro não existe");

	let favorites_books = [];

	favorites_books.push(...user.favorites_books);

	if (favorites_books.includes(BookId))
		throw new Error("O livro já está na sua lista de favoritos");

	favorites_books.push(BookId);

	await User.update(
		{ favorites_books },
		{
			where: {
				id: UserId,
			},
		}
	);

	return { BookId, favorites_books };
};

exports.indexFavoriteBooks = async ({ user_id }) => {
	const { favorites_books } = await User.findOne({ where: { id: user_id } });

	return { favorites_books };
};
