import { objectType, extendType, stringArg, nonNull, intArg } from 'nexus'
import { Context } from '../context'

export const Recipe = objectType({
  name: 'Recipe',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('description')
    t.boolean('published')
  },
})

export const RecipeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('drafts', {
      type: 'Recipe',
      resolve(_root, _args, context: Context) {
        return context.db.recipe.findMany((r) => r.published === false)
      },
    })
    t.list.field('recipes', {
      type: 'Recipe',
      resolve(_root, _args, context: Context) {
        return context.db.recipe.findMany((r) => r.published === true)
      },
    })
    t.nullable.field('recipeById', {
      type: 'Recipe',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.db.recipe.findUnique({
          where: { id: args.id || undefined },
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
      args: {
        title: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },
      resolve(_root, args, context: Context) {
        const draft = {
          title: args.title,
          description: args.description,
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
