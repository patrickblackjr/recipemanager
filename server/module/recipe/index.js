import RecipeTC from './types'
import resolvers from './resolvers'

for (const resolver in resolvers) {
  RecipeTC.addResolver(resolvers[resolver])
}

module.exports = RecipeTC
