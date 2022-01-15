import dotenv from 'dotenv'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloLogPlugin } from 'apollo-log'

const apolloLogOptions = {}
const plugins = [ApolloLogPlugin(apolloLogOptions)]

import './utils/db'
import schema from './utils/buildSchema'

dotenv.config()

const app = express()

const server = new ApolloServer({
  schema,
  cors: true,
  introspection: true,
  tracing: true,
  plugins,
})

server.start().then((res) => {
  server.applyMiddleware({
    app,
    cors: true,
  })
})

app.listen({ port: process.env.PORT }, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`)
})
