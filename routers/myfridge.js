const { Router } = require("express");
const Recipes = require("../models").recipe;
const User = require("../models").user;
const Recipeingredientamount = require("../models").recipeingredientamount;
const Ingredient = require("../models").ingredient;
const Favourites = require("../models").userfavoriterecipe;
const authMiddleWare = require("../auth/middleware");
const UserIngredient = require("../models").useringredient;

const router = new Router();

//get user ingredients
// test http GET :4000/recipes/myfridge
router.get("/", authMiddleWare, async (req, res, next) => {
  try {
    let user = req.user;
    // console.log("user= ", user);
    if (user === null) {
      return res.status(404).send({ message: "This user does not exist" });
    }
    user = await User.findByPk(user.id, { include: [Ingredient] });
    // console.log("user= ", user);
    res.send(user.ingredients);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// Have some problem.  adding only first ingredient from array of ingredients
// add products into my fridge
router.post("/new", authMiddleWare, async (req, res, next) => {
  // console.log("res= ", res);
  const user = req.user;
  // console.log("user= ", user);
  if (!user) {
    return res.status(404).send({ message: "This user does not exist" });
  }

  try {
    const products = [];
    for (const product of req.body.products) {
      let existingProduct = await Ingredient.findOne({
        where: { name: product.productName.toLowerCase() },
      });
      if (!existingProduct) {
        existingProduct = await Ingredient.create({
          name: product.productName.toLowerCase(),
        });
      }
      let existingUserIngredient = await UserIngredient.findOne({
        where: { userId: user.id, ingredientId: existingProduct.id },
      });

      if (!existingUserIngredient) {
        existingUserIngredient = await UserIngredient.create({
          userId: user.id,
          ingredientId: existingProduct.id,
          amount: 0,
        });
      }

      existingUserIngredient.amount += +product.amount;
      await existingUserIngredient.save();

      products.push({
        ...existingProduct.dataValues,
        useringredient: {
          ...existingUserIngredient.dataValues,
        },
      });
    }

    res.status(201).send(products);
  } catch (err) {
    res.send(err);
  }
});

router.put("/update", authMiddleWare, async (req, res, next) => {
  const user = req.user;
  if (user === null) {
    return res.status(404).send({ message: "This user does not exist" });
  }
  console.log("req.body.brduct = ", req.body);
  const userFridgeItem = await UserIngredient.findOne({
    where: { userId: user.id, ingredientId: req.body.ingredientId },
  });
  if (!userFridgeItem) {
    return res.status(200).send({ message: "Ingredient has been deleted" });
  }
  if (+req.body.amount < 0) {
    return res.status(200).send({ message: "Amount can't be less then 0" });
  }
  if (+req.body.amount === 0) {
    await userFridgeItem.destroy();
  } else {
    userFridgeItem.amount = req.body.amount;
    await userFridgeItem.save();
  }
  return res.status(201).send({ message: "Change succes", userFridgeItem });
});

module.exports = router;
