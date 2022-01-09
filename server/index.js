import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const app = express()

app.use(cors())

const schema = gql`
  type Query {
    users: [User!]
    me: User
    user(id: ID!): User

    messages: [Message!]!
    message(id: ID!): Message!
  }
  type User {
    id: ID!
    username: String!
  }
  type Message {
    id: ID!
    text: String!
    user: User!
  }
`

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
}

const me = users[1]
let messages = {
  1: {
    id: '1',
    text: 'Hello World',
  },
  2: {
    id: '2',
    text: 'By World',
  },
}

const resolvers = {
  Query: {
    users: () => {
      return Object.values(users)
    },
    user: (parent, { id }) => {
      return users[id]
    },
    me: (parent, args, { me }) => {
      return me
    },
    messages: () => {
      return Object.values(messages)
    },
    message: (parent, { id }) => {
      return messages[id]
    },
  },
  User: {
    username: (user) => `${user.firstname} ${user.lastname}`,
  },
  Message: {
    user: (parent, args, { me }) => {
      return me
    },
  },
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[1],
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
