"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipeingredientamount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.recipe, { foreignKey: "recipeId" });
      this.belongsTo(models.ingredient, { foreignKey: "ingredientId" });
    }
  }
  recipeingredientamount.init(
    {
      recipeId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recipeingredientamount",
    }
  );
  return recipeingredientamount;
};
