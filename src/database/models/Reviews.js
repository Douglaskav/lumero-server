const { Model, DataTypes } = require("sequelize");

class Reviews extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        stars: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: connection,
        modelName: "Reviews",
        tableName: "reviews",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Books, { foreignKey: "book_id", as: "book" });
  }
}

module.exports = Reviews;
