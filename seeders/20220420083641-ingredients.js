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
        {
          name: "onion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "garlic clove",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "flour",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "oil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ground black pepper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cabbage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "celery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bay leaf",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "black peppercorns",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tomato",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fresh dill",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "unsalted butter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "russet potato",
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
