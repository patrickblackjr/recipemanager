import {
  objectType,
  extendType,
  stringArg,
  nonNull,
  intArg,
  nullable,
} from 'nexus'
import { Context } from '../context'
import { Ingredient } from './Ingredient'

export const Recipe = objectType({
  name: 'Recipe',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('description')
    t.int('prepTime')
    t.int('cookTime')
    t.int('servings')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('categories', {
      type: 'Category',
    })
  },
})

export const RecipeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allRecipes', {
      type: 'Recipe',
      resolve(_root, _args, context: Context) {
        return context.db.recipe.findMany()
      },
    })
    t.nonNull.field('recipeById', {
      type: 'Recipe',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.db.recipe.findUnique({
          where: { id: args.id },
        })
      },
    })
  },
})

export const RecipeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createRecipe', {
      type: 'Recipe',
      description: `Create a single recipe.`,
      args: {
        title: nonNull(stringArg()),
        description: nullable(stringArg()),
        prepTime: nullable(intArg()),
        cookTime: nullable(intArg()),
        servings: nullable(intArg()),
      },
      resolve(_root, args, context: Context) {
        const draft = {
          title: args.title,
          description: args.description || null,
          prepTime: args.prepTime || 0,
          cookTime: args.prepTime || 0,
          servings: args.servings || 1,
          published: false,
        }
        return context.db.recipe.create({ data: draft })
      },
    })
    t.field('publish', {
      type: 'Recipe',
      args: {
        draftId: nonNull(intArg()),
      },
      resolve(_root, args, context: Context) {
        return context.db.recipe.update({
          where: { id: args.draftId },
          data: {
            published: true,
          },
        })
      },
    })
  },
})
