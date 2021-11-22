"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("books", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        unique: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      synopsis: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      categories: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      audioFile: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      bookCover: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("books");
  },
};
