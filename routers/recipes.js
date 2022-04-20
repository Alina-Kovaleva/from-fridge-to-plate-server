const { Router } = require("express");
const Recipes = require("../models").recipe;
const User = require("../models").user;
const Ria = require("../models").recipeingredientamount;
const ingredient = require("../models").ingredient;
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
    const recipe = await Recipes.findByPk(id, { include: [ingredient] });
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

router.post("/new", authMiddleWare, async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  if (user === null) {
    return res.status(404).send({ message: "This user does not exist" });
  }
  const { imageUrl, title, difficulty, duration, description } = req.body;
  const recipe = await Recipes.create({
    imageUrl,
    title,
    difficulty,
    duration,
    description,
    // add list of ingredients to recipe-ingredient-amount-table
    // userId: user.id,
  });
  return res.status(201).send({ message: "Recipe created", recipe });
});

module.exports = router;
