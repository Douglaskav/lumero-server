const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
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
        photoPath: DataTypes.STRING,
        alreadyReadedBooks: DataTypes.ARRAY(DataTypes.STRING),
        currentReadingBooks: DataTypes.ARRAY(DataTypes.STRING),
        favoritesBooks: DataTypes.ARRAY(DataTypes.STRING),
        commentsAndEvaluations: DataTypes.ARRAY(DataTypes.STRING),
      },
      {
        sequelize: connection,
        modelName: "Users",
        tableName: "users",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Reviews, { foreignKey: "user_id" });
  }
}

module.exports = User;
