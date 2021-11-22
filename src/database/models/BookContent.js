const { Model, DataTypes } = require("sequelize");

class BookContent extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize: connection,
        modelName: "BookContent",
        tableName: "book_content",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Books, { foreignKey: "book_id", as: "book" });
  }
}

module.exports = BookContent;
