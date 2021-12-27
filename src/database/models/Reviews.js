"use strict";
const { Model, DataTypes } = require("sequelize");

class Reviews extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        content: DataTypes.STRING,
        stars: DataTypes.FLOAT,
      },
      {
        sequelize,
        modelName: "Review",
        tableName: "reviews",
      }
    );
  }

  static associate(models) {
    // define association here
  }
}

module.exports = Reviews;
