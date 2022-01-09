const mongoose = require('mongoose')

// schema definition

const IngredientSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String,
      required: [true, 'A description is required.']
    }
  },
  { timestamps: true }
)

const Ingredient = mongoose.model('Ingredient', IngredientSchema)

module.exports = Ingredient
