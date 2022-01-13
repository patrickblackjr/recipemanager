import { createModule, gql } from 'graphql-modules'
// import 'graphql-import-node'
// import { userGql } from './User.graphql'

export const UserModule = createModule({
  id: 'user',
  dirname: __dirname,
  typeDefs: gql`
    type Query {
      user(id: ID!): User
    }
    type User {
      id: ID!
      username: String!
    }
  `,
  resolvers: {
    User: {
      id: (user) => user._id,
      username: (user) => user.username,
    },
  },
})
