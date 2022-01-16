import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'
import { composeWithMongoose } from 'graphql-compose-mongoose'

export const RecipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { collection: 'recipes' }
)

RecipeSchema.plugin(timestamps)

export const Recipe = mongoose.model('Recipe', RecipeSchema)
export const RecipeTC = composeWithMongoose(Recipe)
