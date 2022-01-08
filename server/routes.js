const express = require('express')
const router = express.Router()

// model imports
const Recipe = require('./models/Recipe.model')

// GET
// All recipes
router.get('/recipe/all', async (req, res, next) => {
  const recipes = await Recipe.find()
  res.send(recipes)
})

router.post('/recipe', async (req, res, next) => {
  const recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    totalTime: req.body.totalTime,
    recipeTags: req.body.recipeTags,
    instructions: req.body.instructions,
    yield: req.body.yield,
    prepTime: req.body.prepTime,
    cookTime: req.body.cookTime,
    totalTime: req.body.totalTime,
    originUrl: req.body.originUrl
  })
  try {
    const newRecipe = await recipe.save()
    res.status(200).json({ newRecipe })
    res.send(recipe)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
