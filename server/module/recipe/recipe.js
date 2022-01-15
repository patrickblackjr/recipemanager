import mongoose from 'mongoose'

const { Schema } = mongoose

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestraps: true }
)

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe
