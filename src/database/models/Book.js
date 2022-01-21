"use strict";
const { Model, DataTypes } = require("sequelize");

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        title: DataTypes.STRING,
        synopsis: DataTypes.TEXT,
        content: DataTypes.TEXT,
        author: DataTypes.STRING,
        categories: DataTypes.STRING,
        audio_file: DataTypes.STRING,
        cover: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Book",
        tableName: "books",
      }
    );
  }

  static associate(models) {
    // define association here
  }
}

module.exports = Book;
