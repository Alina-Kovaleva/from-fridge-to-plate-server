const { Router } = require("express");
const Recipes = require("../models").recipe;
const User = require("../models").user;
const Recipeingredientamount = require("../models").recipeingredientamount;
const Ingredient = require("../models").ingredient;
const authMiddleWare = require("../auth/middleware");

const router = new Router();

// Get all recipes
// test http GET :4000/recipes

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipes.findAll();
    if (!recipes) {
      response.status(404).send("Something went wrong, recipes not found");
    }
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
router.post(
  "/new",
  /*authMiddleWare,*/ async (req, res, next) => {
    // const user = await User.findByPk(req.userId);
    // if (user === null) {
    //   return res.status(404).send({ message: "This user does not exist" });
    // }
    const { imageUrl, title, difficulty, duration, description, ingredients } =
      req.body;
    const recipe = await Recipes.create({
      imageUrl,
      title,
      difficulty,
      duration,
      description,
      // userId: user.id,
      userId: 1,
    });
    //   console.log(ingredients);
    for (const ingredient of ingredients) {
      let existingIngredient = await Ingredient.findOne({
        where: { name: ingredient.name },
      });
      // console.log(ingredient);
      // console.log(existingIngredient);
      if (existingIngredient === null) {
        //   console.log("creating ", ingredient.name);
        existingIngredient = await Ingredient.create({
          name: ingredient.name,
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
  }
);

module.exports = router;
