"use strict";
const User = require("../models").user;
const Recipe = require("../models").recipe;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "al@al.com" },
    });
    const user2 = await User.findOne({
      where: { email: "test@test.com" },
    });
    const recipe1 = await Recipe.findOne({
      where: { title: "Olivier" },
    });

    await queryInterface.bulkInsert(
      "userfavoriterecipes",
      [
        {
          userId: user1.id,
          recipeId: recipe1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user2.id,
          recipeId: recipe1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userfavoriterecipes", null, {});
  },
};
