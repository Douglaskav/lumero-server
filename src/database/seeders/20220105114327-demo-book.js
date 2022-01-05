"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          id: "e2c8a4a6-5af8-4ae3-9215-8a8ad5859eaa",
          title: "A book",
          synopsis: "this is the synopsis of the book",
          author: "test",
          categories: ["test", "development", "creation"],
          audio_file: "/test/audio.mp3",
          cover: "/images/cover.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("books", null, {});
  },
};
