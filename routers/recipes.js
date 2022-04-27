const { Router } = require("express");
const Recipes = require("../models").recipe;
const User = require("../models").user;
const Recipeingredientamount = require("../models").recipeingredientamount;
const Ingredient = require("../models").ingredient;
const Favourites = require("../models").userfavoriterecipe;
const authMiddleWare = require("../auth/middleware");
const optionalAuthMiddleWare = require("../auth/optionalauth");
const UserIngredient = require("../models").useringredient;

const router = new Router();

// how many ingredients user is missing
function sortHelper(recipe, userFridge) {
  let missing = 0;
  for (const recipeIngredient of recipe.ingredients) {
    let found = false;
    for (const userIngredient of userFridge) {
      // console.log("?????????");
      // console.log(userIngredient);
      if (recipeIngredient.id === userIngredient.ingredientId) {
        if (
          !recipeIngredient.amount ||
          +recipeIngredient.amount <= +userIngredient.amount
        ) {
          found = true;
        }
        break;
      }
    }
    if (!found) {
      missing++;
    }
  }
  recipe.setDataValue("missingIngredients", missing);
  // console.log(recipe);
  console.log("sorting. ", recipe.id, " ", missing);
  return missing;
}

// Get all recipes
// test http GET :4000/recipes

router.get("/", optionalAuthMiddleWare, async (req, res, next) => {
  try {
    let recipes = await Recipes.findAll({ include: [Ingredient] });
    // console.log("recipes = ", recipes);
    if (!recipes) {
      response.status(404).send("Something went wrong, recipes not found");
    }
    // console.log("req.user= ", req.user);
    if (req.user) {
      const userFridge = await UserIngredient.findAll({
        where: { userId: req.user.id },
      });
      // console.log("userFridge= ", userFridge);
      // recipes = recipes.sort((a, b) => a.title.localeCompare(b.title));
      recipes = recipes.sort(
        (a, b) => sortHelper(a, userFridge) - sortHelper(b, userFridge)
      );
    }
    // console.log("recipes = ", recipes);
    res.send(recipes);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//GET recipe by ID
// test http GET :4000/recipes/2
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log("this is id from params", id);
    const recipe = await Recipes.findByPk(id, { include: [Ingredient] });
    if (!recipe) {
      res.status(404).send("Something went wrong, recipe not found");
      return;
    }
    res.send(recipe);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// POST a new recipe
// test POST -c "application/json" http://localhost:4000/recipes/new [postNewRecipeTest.json]
router.post("/new", authMiddleWare, async (req, res, next) => {
  // console.log("res= ", res);
  const user = req.user;
  console.log("user= ", user);
  if (user === null) {
    return res.status(404).send({ message: "This user does not exist" });
  }
  console.log("req.body= ", req.body);
  let { imageUrl, title, difficulty, duration, description, ingredients } =
    req.body;
  if (imageUrl === "")
    imageUrl =
      "https://res.cloudinary.com/crazylittled/image/upload/v1650540678/codaisseur/default.png";
  const recipe = await Recipes.create({
    imageUrl,
    title,
    difficulty,
    duration,
    description,
    userId: user.id,
    // userId: 1,
  });
  //   console.log(ingredients);
  for (const ingredient of ingredients) {
    let existingIngredient = await Ingredient.findOne({
      where: { name: ingredient.ingredientName },
    });
    // console.log(ingredient);
    // console.log(existingIngredient);
    if (existingIngredient === null) {
      //   console.log("creating ", ingredient.name);
      existingIngredient = await Ingredient.create({
        name: ingredient.ingredientName,
      });
    }

    // console.log("creating connection");
    const addRecipeIngredient = await Recipeingredientamount.create({
      recipeId: recipe.id,
      ingredientId: existingIngredient.id,
      amount: ingredient.amount,
    });
  }
  return res.status(201).send({ message: "Recipe created", recipe });
});

// // Get all favourite recipes by User id
// router.get("/facourites", async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findByPk(userId);
//     if (user === null) {
//       return res.status(404).send({ message: "This user does not exist" });
//     }
//   } catch (e) {
//     console.log(e.message);
//     next(e);
//   }
// });

module.exports = router;
