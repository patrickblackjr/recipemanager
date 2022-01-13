import { createApplication } from 'graphql-modules'
// import 'graphql-import-node'

// import modules
import { UserModule } from './User/User'

export const graphqlApplication = createApplication({
  modules: [UserModule],
})
