
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          id: "944484bc-9563-47d5-863e-8bfbc3234d7c",
          title: "Seed Book",
          synopsis: "Seed Book Synopsis",
          content: "https://blabla.com/seed_book.txt",
          author: "Sequelize Seeder",
          categories: "['test', 'development', 'creation']",
          language: "English",
          pages: 231,
          time: "02:58:23",
          audio_files: "https://blabla.com/test.mp3",
          cover: "cover.jpg",
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

