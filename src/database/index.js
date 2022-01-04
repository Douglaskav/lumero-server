const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const User = require("./models/User");
const Book = require("./models/Book");
const Reviews = require("./models/Reviews");
const Content = require("./models/Content");

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Book.init(sequelize);
Reviews.init(sequelize);
Content.init(sequelize);

Book.hasOne(Content);
Content.belongsTo(Book);

Book.hasMany(Reviews);
Reviews.belongsTo(Book);

User.hasMany(Reviews);
Reviews.belongsTo(User);

module.exports = sequelize;
