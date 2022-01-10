import { ApolloServer, gql } from 'apollo-server-fastify'
// import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import fs from 'fs'
import Fastify from 'fastify'
const app = Fastify({
  logger: true,
})
const port = 4000

const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8' }))
const resolvers = require('./resolvers')

app.get('/', (req, res) => {
  res.send('Welcome to my graphql api')
})

const start = async () => {
  try {
    await app.listen(port)
    new ApolloServer({
      typeDefs,
      resolvers,
    })
    app.log.info(`server listening on http://localhost:${port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
