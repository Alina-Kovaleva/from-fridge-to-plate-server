"use strict";
const Ingredient = require("../models").ingredient;
const Recipe = require("../models").recipe;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const recipe1 = await Recipe.findOne({
      where: { title: "Olivier" },
    });
    const recipe2 = await Recipe.findOne({
      where: { title: "Potato Pancakes  (Draniki)" },
    });
    const recipe3 = await Recipe.findOne({
      where: { title: "Cabbage Soup (Shchi)" },
    });
    const recipe4 = await Recipe.findOne({
      where: { title: "Dressed Herring" },
    });
    const recipe5 = await Recipe.findOne({
      where: { title: "Mimosa Salad" },
    });
    const recipe6 = await Recipe.findOne({
      where: { title: "Okroshka (Summer Soup)" },
    });
    const recipe7 = await Recipe.findOne({
      where: { title: "Cottage Cheese Pancake" },
    });

    const ingredient1 = await Ingredient.findOne({
      where: { name: "potato" },
    });
    const ingredient2 = await Ingredient.findOne({
      where: { name: "carrot" },
    });
    const ingredient3 = await Ingredient.findOne({
      where: { name: "pickles" },
    });
    const ingredient4 = await Ingredient.findOne({
      where: { name: "canned green peas" },
    });
    const ingredient5 = await Ingredient.findOne({
      where: { name: "egg" },
    });
    const ingredient6 = await Ingredient.findOne({
      where: { name: "chicken breasts" },
    });
    const ingredient7 = await Ingredient.findOne({
      where: { name: "sour cream" },
    });
    const ingredient8 = await Ingredient.findOne({
      where: { name: "mayonnaise" },
    });
    const ingredient9 = await Ingredient.findOne({
      where: { name: "salt" },
    });
    const ingredient10 = await Ingredient.findOne({
      where: { name: "onion" },
    });
    const ingredient11 = await Ingredient.findOne({
      where: { name: "oil" },
    });
    const ingredient12 = await Ingredient.findOne({
      where: { name: "garlic clove" },
    });
    const ingredient13 = await Ingredient.findOne({
      where: { name: "flour" },
    });
    const ingredient14 = await Ingredient.findOne({
      where: { name: "ground black pepper" },
    });
    const ingredient15 = await Ingredient.findOne({
      where: { name: "unsalted butter" },
    });
    const ingredient16 = await Ingredient.findOne({
      where: { name: "cabbage" },
    });
    const ingredient17 = await Ingredient.findOne({
      where: { name: "celery" },
    });
    const ingredient18 = await Ingredient.findOne({
      where: { name: "bay leaf" },
    });
    const ingredient19 = await Ingredient.findOne({
      where: { name: "black peppercorns" },
    });
    const ingredient20 = await Ingredient.findOne({
      where: { name: "russet potato" },
    });
    const ingredient21 = await Ingredient.findOne({
      where: { name: "tomato" },
    });
    const ingredient22 = await Ingredient.findOne({
      where: { name: "fresh dill" },
    });
    const ingredient23 = await Ingredient.findOne({
      where: { name: "pickled herring" },
    });
    const ingredient24 = await Ingredient.findOne({
      where: { name: "beetroot" },
    });
    const ingredient25 = await Ingredient.findOne({
      where: { name: "cans tuna" },
    });
    const ingredient26 = await Ingredient.findOne({
      where: { name: "mineral water" },
    });
    const ingredient27 = await Ingredient.findOne({
      where: { name: "vinegar" },
    });
    const ingredient28 = await Ingredient.findOne({
      where: { name: "green onion" },
    });
    const ingredient29 = await Ingredient.findOne({
      where: { name: "cucumber" },
    });
    const ingredient30 = await Ingredient.findOne({
      where: { name: "cottage cheese" },
    });
    const ingredient31 = await Ingredient.findOne({
      where: { name: "vanilla extract" },
    });
    const ingredient32 = await Ingredient.findOne({
      where: { name: "baking powder" },
    });
    const ingredient33 = await Ingredient.findOne({
      where: { name: "sugar" },
    });

    await queryInterface.bulkInsert(
      "recipeingredientamounts",
      [
        // {
        //   recipeId: "",
        //   ingredientId: "",
        //   amount: "",
        // createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        {
          recipeId: recipe7.id,
          ingredientId: ingredient11.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe7.id,
          ingredientId: ingredient33.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe7.id,
          ingredientId: ingredient32.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe7.id,
          ingredientId: ingredient31.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe7.id,
          ingredientId: ingredient13.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe7.id,
          ingredientId: ingredient5.id,
          amount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe7.id,
          ingredientId: ingredient30.id,
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient1.id,
          amount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient2.id,
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient3.id,
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient4.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient5.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient6.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient7.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient8.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe1.id,
          ingredientId: ingredient9.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe2.id,
          ingredientId: ingredient1.id,
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe2.id,
          ingredientId: ingredient5.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe2.id,
          ingredientId: ingredient10.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe2.id,
          ingredientId: ingredient12.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe2.id,
          ingredientId: ingredient13.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe2.id,
          ingredientId: ingredient9.id,
          amount: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe2.id,
          ingredientId: ingredient14.id,
          amount: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe2.id,
          ingredientId: ingredient11.id,
          amount: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient22.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient7.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient14.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient9.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient21.id,
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient20.id,
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient19.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient18.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient17.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient2.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient16.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient10.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe3.id,
          ingredientId: ingredient15.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient11.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient14.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient9.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient8.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient10.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient2.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient1.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient24.id,
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe4.id,
          ingredientId: ingredient23.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient22.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient14.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient9.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient8.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient10.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient5.id,
          amount: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient2.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient1.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe5.id,
          ingredientId: ingredient25.id,
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient29.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient5.id,
          amount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient1.id,
          amount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient6.id,
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient28.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient22.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient9.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient27.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient7.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: recipe6.id,
          ingredientId: ingredient26.id,
          amount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipeingredientamounts", null, {});
  },
};
