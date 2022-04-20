"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userfavoriterecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.belongsTo(models.recipe, { foreignKey: "recipeId" });
    }
  }
  userfavoriterecipe.init(
    {
      userId: { type: DataTypes.INTEGER },
      recipeId: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "userfavoriterecipe",
    }
  );
  return userfavoriterecipe;
};
