"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        {
          name: "potato",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "carrot",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "pickles",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "canned green peas",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "egg",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "chicken breasts",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "sour cream",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "mayonnaise",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },

        {
          name: "salt",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "onion",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "garlic clove",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "flour",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "oil",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "ground black pepper",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "cabbage",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "celery",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "bay leaf",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "black peppercorns",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "tomato",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "fresh dill",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "unsalted butter",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "russet potato",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "pickled herring",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "beetroot",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "cans tuna",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "mineral water",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "vinegar",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "green onion",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "cucumber",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "cottage cheese",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "vanilla extract",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "baking powder",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
        {
          name: "sugar",
          createdAt: new Date("2022-04-29T08:57:36.863Z"),
          updatedAt: new Date("2022-04-29T08:57:36.863Z"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ingredients", null, {});
  },
};
