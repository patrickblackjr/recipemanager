const mongoose = require('mongoose')

// schema definition

const RecipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A title is required.']
    },
    description: {
      type: String
    },
    totalTime: {
      type: String
    },
    recipeTags: {
      type: Array
    },
    // ingredient: [
    //   {
    //     _id: mongoose.Schema.Types.ObjectId,
    //     ref: 'Ingredient'
    //   }
    // ],
    yield: {
      type: Number
    },
    prepTime: {
      type: Number
    },
    cookTime: {
      type: Number
    },
    totalTime: {
      type: Number
    },
    originUrl: {
      type: String
    }
  },
  { timestamps: true }
)

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe
