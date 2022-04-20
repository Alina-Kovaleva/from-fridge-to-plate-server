"use strict";
const Ingredient = require("../models").ingredient;
const Recipe = require("../models").recipe;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const recipe1 = await Recipe.findOne({
      where: { title: "Olivier" },
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
    await queryInterface.bulkInsert(
      "recipeingredientamounts",
      [
        // {
        //   recipeId: "",
        //   ingredientId: "",
        //   amount: "",
        // },
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
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipeingredientamounts", null, {});
  },
};
