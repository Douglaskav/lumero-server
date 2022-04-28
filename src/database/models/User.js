"use strict";
const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        username: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          unique: true,
        },
        password: DataTypes.STRING,
        image: DataTypes.STRING,
        already_readed_books: DataTypes.JSON, 
        current_reading_books: DataTypes.JSON,
        favorites_books: DataTypes.JSON
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        defaultScope: {
          attributes: { exclude: ["password"] },
        },
      }
    );
  }
}

module.exports = User;
