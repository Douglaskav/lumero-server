const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("./models/User");
const Book = require("./models/Book");
const Reviews = require("./models/Reviews");
const BookContent = require("./models/BookContent");

const connection = new Sequelize(dbConfig);

User.init(connection);
Reviews.init(connection);
Book.init(connection);
BookContent.init(connection);

User.sync();
Reviews.sync();
Book.sync();
BookContent.sync();

User.associate(connection.models);
Reviews.associate(connection.models);
Book.associate(connection.models);
BookContent.associate(connection.models);

module.exports = connection;
