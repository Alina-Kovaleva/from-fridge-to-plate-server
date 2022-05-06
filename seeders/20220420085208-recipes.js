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
    await queryInterface.bulkInsert("recipes", [
      {
        imageUrl:
          "https://www.196flavors.com/wp-content/uploads/2014/02/Olivier-salad-1-FP.jpg",
        title: "Olivier",
        difficulty: 1,
        duration: 60,
        description:
          "Boil potatoes and carrots until tender. Boil the eggs separately. Peel potatoes and carrots. Cut everything into small cubes. Mix everything and season with mayonnaise and sour cream.",
        userId: user1.id,
        createdAt: new Date("2022-04-29T08:57:36.863Z"),
        updatedAt: new Date("2022-04-29T08:57:36.863Z"),
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
        createdAt: new Date("2022-04-29T09:57:36.863Z"),
        updatedAt: new Date("2022-04-29T09:57:36.863Z"),
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
        createdAt: new Date("2022-04-29T09:59:36.863Z"),
        updatedAt: new Date("2022-04-29T09:59:36.863Z"),
      },
      {
        imageUrl:
          "https://res.cloudinary.com/crazylittled/image/upload/v1651784287/codaisseur/shuba-2.jpg",
        title: "Dressed Herring",
        difficulty: 2,
        duration: 360,
        description:
          "Boil beetroots, potatoes and carrots until fork tender. Then cool down and peel them. Now we have to prepare our herring. For this you may to use knife or scissors. Snip off the fins, then make the cut from the centre of the belly up towards the head and remove the guts. Make the cut along on the back from the tail to the head. Now make a short cut next to the tail and carefully peel off the skin. Flip your fish and do the same from the other side. Separate the first piece of fillet from bones. Remove the rest of bones. Now pull out the backbone and our fillet is ready. Cut herring fillet on medium sized pieces. Place all of them in one layer on a wide flat plate. Now finely chop onion. Now slightly mash the onion with the flat side of the knife. It helps to reduce the bitterness and strong onion flavor. Put the layer of onion on top of the herring. Drizzle with sunflower oil, add black pepper to taste. Now add on top of onion about 3 tablespoons of mayo and spread evenly. The next layer gonna be the grated potato. Now you could start to arrange the shape of your salad with spoon or spatula. Top up potato with some mayonnaise and grate the carrot. Put the layer of delicious homemade mayonnaise on top of the carrot. And the top of salad is a grated beetroot. Arrange the shape of dressed herring salad and cover the top and sides with mayo. Chill for 2-3 hours or better overnight and serve.",
        userId: user2.id,
        createdAt: new Date("2022-05-04T08:57:36.863Z"),
        updatedAt: new Date("2022-05-04T08:57:36.863Z"),
      },
      {
        imageUrl:
          "https://res.cloudinary.com/crazylittled/image/upload/v1651785551/codaisseur/DSC_0118-1-1440x1998.jpg",
        title: "Mimosa Salad",
        difficulty: 2,
        duration: 180,
        description:
          "In a saucepan, boil the peeled potatoes and carrots for about 20 minutes, or until they are soft. Allow to cool and set aside. Cook the eggs until they are hard boiled, for about 10 minutes. Don't overcook as you need the egg yolks bright yellow. Allow to cool and peel. Remove the egg yolks from the egg whites. Separately grate the egg whites and set aside. Using a fork, gently crumble the egg yolks until they are in small pieces. Finely dice the white onion. Set aside. If you are using yellow onions which have a sharp bite, put them in boiling water for 2 minutes then strain before using. This will reduce the bite of the yellow onions. Drain the tuna, mash it using a fork with about ¼ cup mayo. On a serving platter, 7-inch springform pan or glass deep dish, start to layer your ingredients. Grate the peeled potatoes over the dish and evenly spread across the entire base. Add a few tablespoons of mayonnaise (or drizzle evenly), using the back of the spoon to thinly spread across the dish, gently pressing into the potatoes. Sprinkle salt and pepper over the potatoes. Spread evenly the tuna over the grated potato. Put the chopped onions evenly over the tuna. Add more mayonnaise to thinly spread across the dish. If you want to use the cheese for this recipe, add in at this layer, and lightly cover with mayo. Grate the carrots, spread evenly over the tuna mayo layer, and lightly cover with another layer of mayonnaise. Layer the grated egg whites evenly across the Mimoza Salad. Add the final layer of mayonnaise. The final layer is the crumbled egg yolks and fresh dill. Refrigerate for at least 2 hours before serving.",
        userId: user2.id,
        createdAt: new Date("2022-05-04T09:57:36.863Z"),
        updatedAt: new Date("2022-05-04T09:57:36.863Z"),
      },
      {
        imageUrl:
          "https://res.cloudinary.com/crazylittled/image/upload/v1651787348/codaisseur/okroshka-soup.jpg",
        title: "Okroshka (Summer Soup)",
        difficulty: 1,
        duration: 30,
        description:
          "Peel potatoes and dice them into 1/4-inch cubes (we used the Vidalia Chopper). Place diced potatoes in a medium pot and cover with water. Add 1 Tbsp vinegar and bring to a boil then continue boiling for 10 minutes or until the potatoes are cooked, but not falling apart. Drain well and set aside to cool. For quicker cooling, you can rinse potatoes with cold water. Boil chicken breast until it done. While potatoes are cooking, boil 3 eggs and cool them in ice water. Next, dice 3 eggs, 3-4 cucumbers, 2 chicken breasts. Also chop 3 Tbsp of dill and 1/2 cup of green onions. Place everything in a large pot. In a separate large bowl, whisk together 8 cups of cold mineral water, 1/3 cup of sour cream, 2 1/2 tsp of salt until combined. Pour the mixture in the pot with the rest of ingredients. Stir to combine and serve.",
        userId: user2.id,
        createdAt: new Date("2022-05-04T10:57:36.863Z"),
        updatedAt: new Date("2022-05-04T10:57:36.863Z"),
      },
      {
        imageUrl:
          "https://res.cloudinary.com/crazylittled/image/upload/v1651789142/codaisseur/cottage-cheese-pancake.jpg",
        title: "Cottage Cheese Pancake",
        difficulty: 1,
        duration: 30,
        description:
          "Combine all ingredients in the following order - 1 1/2 cups cheese, eggs, 1 tsp vanilla extract, 2 tbsp sugar, 1 tbsp baking powder and 1 cup flour. Mix in each time you add an ingredient. Preheat a skillet with 1/4 cup oil on a medium heat. Fry the cottage cheese pancakes on each side until golden brown. Serve with maple syrup or jam, while they are still hot and the cheese inside is melted.",
        userId: user2.id,
        createdAt: new Date("2022-05-04T11:57:36.863Z"),
        updatedAt: new Date("2022-05-04T11:57:36.863Z"),
      },
      {
        imageUrl:
          "https://res.cloudinary.com/crazylittled/image/upload/v1651790696/codaisseur/beef-stroganoff.jpg",
        title: "Beef Stroganoff",
        difficulty: 2,
        duration: 30,
        description:
          "Use your fist (or rolling pin or mallet) to flatten the steaks (600 g) to about 3/4cm / 1/3-inch thick. Slice into 5mm / 1/5-inch strips (cut long ones in half), discarding excess fat. Sprinkle with a pinch of salt and pepper. Heat 1 tbsp oil in a large skillet over high heat. Scatter half the beef in the skillet, QUICKLY spread it with tongs. Leave untouched for 30 seconds until browned. Turn beef quickly (as best you can!). Leave untouched for 30 seconds to brown. Immediately remove onto a plate. Don't worry about pink bits and that it will be raw inside. Add remaining 1 tbsp oil and repeat with remaining beef. Turn heat down to medium high. Add butter, melt. Then add onions, cook for 1 minute, then add 300g sliced mushrooms. Cook mushrooms until golden. Scrape bottom of fry pan to get all the golden bits off (this is flavour!). Add 2 tbsp  flour, cook, stirring, for 1 minute. Add half 250ml the broth while stirring. Once incorporated, add remaining broth. Stir, then add 150 ml sour cream and 1 tbsp mustard. Stir until incorporated (don't worry if it looks split, sour cream will 'melt' as it heats). Bring to simmer ,then reduce heat to medium low. Once it thickens to the consistency of pouring cream (3 - 5 minutes), adjust salt and pepper to taste. Add beef back in (including plate juices). Simmer for 1 minute, then remove from stove immediately. Serve over pasta or egg noodles, sprinkled with chives if desired.",
        userId: user2.id,
        createdAt: new Date("2022-05-04T12:57:36.863Z"),
        updatedAt: new Date("2022-05-04T12:57:36.863Z"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
