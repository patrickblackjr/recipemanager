import { gql } from 'graphql-tag'
import { LocalScheme } from '~/auth/runtime'

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String, $password: String) {
    logIn(email: $email, password: $password) {
      token
      expiresIn
    }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation LogOutMutation {
    logOut
  }
`

export const USER_DETAILS_QUERY = gql`
  query UserDetailsQuery {
    me {
      id
      name
      email
    }
  }
`

export default class GraphQLScheme extends LocalScheme {
  // TODO: Override relevant LocalScheme methods
}
