const User = require("../database/models/User"),
	Book = require("../database/models/Book"),
	{ indexById } = require("./BookServices"),
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

	let favorites_books = [];

	if (!user) throw new Error("O usuário não existe");
	if (!bookExists) throw new Error("O livro não existe");

	if (user.favorites_books) favorites_books.push(...user.favorites_books);

	if (user.favorites_books && favorites_books.includes(BookId))
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
	const user = await User.findOne({ where: { id: user_id } });
	let favorites_books_list = [];

	if (!user) throw new Error("Usuário inexistente!");
	if (!user.favorites_books) return { favorites_books: [] };

	for (let i=0; i < user.favorites_books.length; i++) {
		favorites_books_list.push(await indexById(user.favorites_books[i]));
	}

	return { favorites_books: favorites_books_list };
};
