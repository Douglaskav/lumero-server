"use strict";
const { Model, DataTypes } = require("sequelize");

class Content extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        content: DataTypes.TEXT,
      },
      {
        sequelize,
        modelName: "Content",
        tableName: "contents",
      }
    );
  }

  static associate(models) {
    // define association here
  }
}

module.exports = Content;
