import dotenv from 'dotenv'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloLogPlugin } from 'apollo-log'

const apolloLogOptions = {}
const plugins = [ApolloLogPlugin(apolloLogOptions)]

import mongoose from 'mongoose'

import './utils/db'
import schema from './schema'

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
    onHealthCheck: () =>
      // eslint-disable-next-line no-undef
      new Promise((resolve, reject) => {
        if (mongoose.connection.readyState > 0) {
          resolve()
        } else {
          reject()
        }
      }),
  })
})

app.listen({ port: process.env.PORT }, () => {
  console.log(`🚀 Server listening on port ${process.env.PORT}`)
  console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`)
})
