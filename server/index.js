import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema/index'
import 'dotenv/config'

const port = 4000

new ApolloServer({
  resolvers,
  typeDefs,
}).listen({ port }, () => {
  console.log(`API server up at http://localhost:${port}`)
})
