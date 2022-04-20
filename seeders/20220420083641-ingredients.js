"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        {
          name: "potato",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "carrot",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pickles",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "canned green peas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "egg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chicken breasts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sour cream",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "mayonnaise",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "salt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ingredients", null, {});
  },
};
