"use strict";
const User = require("../models").user;
const Ingredient = require("../models").ingredient;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "al@al.com" },
    });
    const user2 = await User.findOne({
      where: { email: "test@test.com" },
    });

    const ingredient1 = await Ingredient.findOne({
      where: { name: "potato" },
    });
    const ingredient2 = await Ingredient.findOne({
      where: { name: "pickles" },
    });
    const ingredient3 = await Ingredient.findOne({
      where: { name: "egg" },
    });

    await queryInterface.bulkInsert(
      "useringredients",
      [
        {
          userId: user1.id,
          ingredientId: ingredient1.id,
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user1.id,
          ingredientId: ingredient2.id,
          amount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user1.id,
          ingredientId: ingredient3.id,
          amount: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user2.id,
          ingredientId: ingredient1.id,
          amount: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user2.id,
          ingredientId: ingredient3.id,
          amount: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("useringredients", null, {});
  },
};
