import { ApolloServer } from 'apollo-server'
import { context } from './context'
import { schema } from './schema'

export const server = new ApolloServer({
  schema: schema,
  context: context,
})

server.listen().then(async ({ url }) => {
  console.log(`Server ready: ${url}`)
})
