// import UserModel from './recipe'

const recipe = {
  name: 'recipe',
  type: 'Recipe!',
  resolve: ({ context: { recipe } }) => recipe,
}

module.exports = {
  recipe,
}
