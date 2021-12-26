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
        already_readed_books: DataTypes.ARRAY(DataTypes.STRING),
        current_reading_books: DataTypes.ARRAY(DataTypes.STRING),
        favorites_books: DataTypes.ARRAY(DataTypes.STRING),
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
      }
    );
  }

  static associate(models) {
    // define association here
  }
}

module.exports = User;
