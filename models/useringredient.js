"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class useringredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      useringredient.belongsTo(models.user, { foreignKey: "userId" });
      useringredient.belongsTo(models.ingredient, {
        foreignKey: "ingredientId",
      });
    }
  }
  useringredient.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ingredientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "useringredient",
    }
  );
  return useringredient;
};
