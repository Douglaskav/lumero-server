const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const User = require("./models/User");
const Book = require("./models/Book");
const Reviews = require("./models/Reviews");
const Content = require("./models/Content");

const sequelize = new Sequelize(dbConfig);

async function testDatabaseConnection() {
	try {
		sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

User.init(sequelize);
Book.init(sequelize);
Reviews.init(sequelize);
Content.init(sequelize);

testDatabaseConnection();

Book.hasOne(Content);
Content.belongsTo(Book);

Book.hasMany(Reviews);
Reviews.belongsTo(Book);

User.hasMany(Reviews);
Reviews.belongsTo(User);

module.exports = sequelize;
