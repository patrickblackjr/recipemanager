import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const fs = require('fs')
const path = require('path')

const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const resolvers = {
  Query: {
    recipe: async (obj, args, context, info) => {
      return context.prisma.recipes.findMany()
    },
  },
}

const server = new ApolloServer({
  apollo: {
    key: process.env.APOLLO_KEY,
  },
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: {
    prisma,
  },
})

const main = async () => {
  const app = express()
  await server.start()
  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
  )
}

main()
