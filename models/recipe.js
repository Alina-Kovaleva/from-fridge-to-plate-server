"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // recipe.belongsTo(models.user, { foreignKey: "userId" });
      // recipe.hasMany(models.userfavoriterecipe, { foreignKey: "recipeId" });
      // recipe.hasMany(models.recipeingredientamount, { foreignKey: "recipeId" });
      recipe.belongsToMany(models.ingredient, {
        through: "recipeingredientamount",
        foreignKey: "recipeId",
      });
      recipe.belongsToMany(models.user, {
        through: "userfavoriterecipe",
        foreignKey: "recipeId",
      });
      recipe.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  recipe.init(
    {
      imageUrl: DataTypes.STRING,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://res.cloudinary.com/crazylittled/image/upload/v1650540678/codaisseur/default.png",
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
