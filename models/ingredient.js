"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // ingredient.belongsToMany(models.useringredient, {
      //   foreignKey: "ingredientId",
      // });
      // ingredient.belongsToMany(models.recipeingredientamount, {
      //   foreignKey: "ingredientId",
      // });
      ingredient.belongsToMany(models.recipe, {
        through: "recipeingredientamount",
        foreignKey: "ingredientId",
      });
      ingredient.belongsToMany(models.user, {
        through: "useringredient",
        foreignKey: "ingredientId",
      });
    }
  }
  ingredient.init(
    {
      imageUrl: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "ingredient",
    }
  );
  return ingredient;
};
