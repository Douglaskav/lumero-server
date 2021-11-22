const { Model, DataTypes } = require("sequelize");

class Books extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        title: DataTypes.STRING,
        synopsis: DataTypes.TEXT,
        author: DataTypes.STRING,
        categories: DataTypes.ARRAY(DataTypes.STRING),
        audioFile: DataTypes.STRING,
        bookCover: DataTypes.STRING,
      },
      {
        sequelize: connection,
        modelName: "Books",
        tableName: "books",
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Reviews);
    this.hasOne(models.BookContent);
  }
}

module.exports = Books;
