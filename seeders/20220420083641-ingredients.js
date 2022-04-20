"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        {
          id: 1,
          name: "potato",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "carrot",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "pickles",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "canned green peas",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "egg",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "chicken breasts",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "sour cream",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "mayonnaise",
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 9,
          name: "salt",
          imageUrl: "",
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
