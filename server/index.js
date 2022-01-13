import { GraphQLModule } from '@graphql-modules/core'
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
require('dotenv').config()
// import 'graphql-import-node'
import { graphqlApplication } from './modules/importer'

const { createSchemaForApollo } = graphqlApplication
const schema = createSchemaForApollo()

const server = new ApolloServer({
  schema,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
})

//express server
const app = express()

app.get('/rest', (req, res) => {
  res.json({
    data: 'API is working...',
  })
})

server.start().then((res) => {
  server.applyMiddleware({ app })
  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `🚀 Server is up at http://localhost:${process.env.PORT}${server.graphqlPath}`
    )
  })
})
