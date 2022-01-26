import { gql } from 'apollo-server'
const { prisma } = require('../db')

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String!
    recipes: [Recipe!]!
  }
  type Recipe {
    id: ID!
    title: String!
    description: String
    published: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    allRecipes: [Recipe!]!
    recipe(id: ID!): Recipe
  }
  type Mutation {
    createUser(data: UserCreateInput!): User!
    createRecipe(
      creatorEmail: String
      description: String
      title: String!
    ): Recipe!
    publish(id: ID!): Recipe
  }
  input UserCreateInput {
    email: String!
    name: String
    recipes: [RecipeCreateWithoutUserInput]
  }
  input RecipeCreateWithoutUserInput {
    title: String!
    description: String
    published: Boolean
  }
`

const resolvers = {
  Query: {
    allRecipes: (parent, args) => {
      return prisma.recipe.findMany({
        where: { published: true },
      })
    },
    recipe: (parent, args) => {
      return prisma.recipe.findUnique({
        where: { id: Number(args.id) },
      })
    },
  },
  Mutation: {
    createRecipe: (parent, args) => {
      return prisma.recipe.create({
        data: {
          title: args.title,
          description: args.description,
          published: false,
          // creator: args.creatorEmail && {
          //   connect: { id: Number(args.id) },
          // },
        },
      })
    },
    publish: (parents, args) => {
      return prisma.recipe.update({
        where: {
          id: Number(args.id),
        },
        data: {
          published: true,
        },
      })
    },
    createUser: (parent, args) => {
      return prisma.user.create({
        data: {
          name: args.data.name,
          email: args.data.email,
          recipes: {
            create: args.data.recipes,
          },
        },
      })
    },
  },
  User: {
    recipes: (parent, args) => {
      return prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .recipes()
    },
  },
  Recipe: {
    // creator: (parent, args) => {
    //   return prisma.recipe
    //     .findUnique({
    //       where: { id: parent.id },
    //     })
    //     .creator()
    // },
  },
}

module.exports = {
  typeDefs,
  resolvers,
}
