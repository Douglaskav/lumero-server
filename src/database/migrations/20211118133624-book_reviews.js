"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("books_reviews", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        unique: true,
      },

      book_id: {
        type: Sequelize.UUID,
        references: { model: "books", key: "id" },
        onDelete: "CASCADE",
        allowNull: false,
      },

      review_id: {
        type: Sequelize.UUID,
        references: { model: "reviews", key: "id" },
        onDelete: "CASCADE",
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
    return await queryInterface.dropTable("books_reviews");
  },
};
