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
				title: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				synopsis: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
				content: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
				author: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				categories: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				language: {
					type: DataTypes.STRING,
					allowNull: false
				},
				pages: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				time: {
					type: DataTypes.STRING,
					allowNull: false
				},
				audio_files: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				cover: {
					type: DataTypes.STRING,
					allowNull: false,
				},
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
