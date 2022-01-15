import { schemaComposer } from 'graphql-compose'
import { composeWithMongoose } from 'graphql-compose-mongoose'
import RecipeModel from './recipe'

const RecipeTC = composeWithMongoose(RecipeModel)

const { RecipeTC } = require('@app/module')

schemaComposer.Query.addFields({
  recipeCreateOne: RecipeTC.getResolver('createOne'),
  recipeCreateMany: RecipeTC.getResolver('createMany'),
  recipeUpdateById: RecipeTC.getResolver('updateById'),
  recipeUpdateOne: RecipeTC.getResolver('updateOne'),
  recipeUpdateMany: RecipeTC.getResolver('updateMany'),
  recipeRemoveById: RecipeTC.getResolver('removeById'),
  recipeRemoveOne: RecipeTC.getResolver('removeOne'),
  recipeRemoveMany: RecipeTC.getResolver('removeMany'),
})

const schema = schemaComposer.buildSchema()

module.exports = schema

// .createFields etc

module.exports = RecipeTC
