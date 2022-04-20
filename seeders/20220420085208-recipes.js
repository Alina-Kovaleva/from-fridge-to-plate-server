"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "al@al.com" },
    });
    const user2 = await User.findOne({
      where: { email: "test@test.com" },
    });
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          imageUrl:
            "https://www.196flavors.com/wp-content/uploads/2014/02/Olivier-salad-1-FP.jpg",
          title: "Olivier",
          difficulty: 1.5,
          duration: 60,
          description:
            "Boil potatoes and carrots until tender. Boil the eggs separately. Peel potatoes and carrots. Cut everything into small cubes. Mix everything and season with mayonnaise and sour cream.",
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
