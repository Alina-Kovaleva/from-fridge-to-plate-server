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
          difficulty: 1,
          duration: 60,
          description:
            "Boil potatoes and carrots until tender. Boil the eggs separately. Peel potatoes and carrots. Cut everything into small cubes. Mix everything and season with mayonnaise and sour cream.",
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/crazylittled/image/upload/v1650996392/codaisseur/Screenshot_from_2022-04-26_19-56-57.png",
          title: "Potato Pancakes  (Draniki)",
          difficulty: 2,
          duration: 60,
          description:
            "Combine 4-5 potatoes, 1 onion, 1 egg, 1 garlic clove, 2-3 Tbsp flour, 1½ tsp salt, and ⅛ tsp pepper in a food processor and grind until it resembles batter with no large chunks, about 4 minutes. Alternatively, grate the potatoes and onion on the star grater until a fine puree form. Then add the rest of the ingredients and whisk together. Heat couple tablespoons of oil in a skillet, add a large spoonful of 'potato pancake batter'. Brown on each side (about 3-4 minutes per side) covered with a lid. Transfer to a serving plate. Serve right away, with sour cream or applesauce. Finish the rest of the batter, in the above-described manner.You should get about 16-20 potato latkes.",
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/crazylittled/image/upload/v1650996611/codaisseur/Screenshot_from_2022-04-26_20-09-03.png",
          title: "Cabbage Soup (Shchi)",
          difficulty: 2,
          duration: 55,
          description:
            "Prepare the ingredients. Dice the onion, shred cabbage,  peeled and coarsely grated carrot, chopped celery, peeled and coarsely chopped potatoes, peeled seeded and chopped tomatoes, or a 14-ounce can diced tomatoes, undrained. Add the butter to a large saucepan or Dutch oven over medium heat. Add the onion and sauté until translucent. Add the shredded cabbage, grated carrot, and chopped celery. Sauté about 3 minutes, stirring frequently. Add the bay leaf and black peppercorns. Pour in the water or vegetable stock and bring to a boil. Reduce the heat and simmer, covered, for 15 minutes. Add the potatoes to the soup and bring it back to a boil. Reduce the heat and simmer, covered, until the potatoes are tender, about 10 minutes. Add the chopped fresh tomatoes (or undrained canned tomatoes) and bring the soup back to a boil. Reduce the heat and simmer, uncovered, for 5 minutes. Season with salt and pepper to taste. Remove the bay leaf and peppercorns from the pot (some cooks leave the peppercorns in). Serve bowls of the soup topped with fresh sour cream and fresh dill and enjoy.",
          userId: user2.id,
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
