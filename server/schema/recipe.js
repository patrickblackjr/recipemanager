import { Recipe, RecipeTC } from '../models/recipe'
import { Instruction, InstructionTC } from '../models/instruction'

RecipeTC.addRelation('instructions', {
  resolver: InstructionTC.getResolver('findMany'),
  args: {
    filter: (source) => ({
      _operators: {
        _id: {
          in: source.instructionIds || [],
        },
      },
    }),
  },
  projection: { instructionIds: true },
})

InstructionTC.addRelation('recipe', {
  resolver: RecipeTC.getResolver('findOne'),
  args: {
    _id: (source) => source.recipeId,
  },
  projection: { recipeId: true },
})

const RecipeQuery = {
  recipeById: RecipeTC.getResolver('findById'),
  recipeByIds: RecipeTC.getResolver('findByIds'),
  recipeOne: RecipeTC.getResolver('findOne'),
  recipeMany: RecipeTC.getResolver('findMany'),
  recipeCount: RecipeTC.getResolver('count'),
  recipeConnection: RecipeTC.getResolver('connection'),
  recipePagination: RecipeTC.getResolver('pagination'),
}

const RecipeMutation = {
  recipeCreateOne: RecipeTC.getResolver('createOne'),
  recipeCreateMany: RecipeTC.getResolver('createMany'),
  recipeUpdateById: RecipeTC.getResolver('updateById'),
  recipeUpdateOne: RecipeTC.getResolver('updateOne'),
  recipeUpdateMany: RecipeTC.getResolver('updateMany'),
  recipeRemoveById: RecipeTC.getResolver('removeById'),
  recipeRemoveOne: RecipeTC.getResolver('removeOne'),
  recipeRemoveMany: RecipeTC.getResolver('removeMany'),
}

export { RecipeQuery, RecipeMutation }
