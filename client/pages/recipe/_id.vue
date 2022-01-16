<template>
  <div>
    <div class="container">
      <div class="row mb-4">
        <div class="col">
          <nuxt-link class="text-decoration-none" to="/recipes"
            ><font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" /> Back
            to all recipes</nuxt-link
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <div class="row">
              <div class="col">
                <div class="row">
                  <div class="col">
                    <p class="text-muted">ID: {{ recipeById._id }}</p>
                  </div>
                  <div class="col">
                    <p class="text-muted">
                      Created: {{ recipeById.createdAt }}
                    </p>
                  </div>
                  <div class="col">
                    <p class="text-muted">
                      Updated: {{ recipeById.updatedAt }}
                    </p>
                  </div>
                </div>
                <div class="form-group my-3">
                  <label class="form-label">Recipe title</label>
                  <input
                    v-model="recipeById.title"
                    type="type"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group my-3">
                  <label class="form-label">Recipe description</label>
                  <input
                    v-model="recipeById.description"
                    type="type"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group my-3">
                  <label class="form-label">Prep time</label>
                  <input type="type" class="form-control" value="Recipe" />
                  <div class="form-text">in minutes</div>
                </div>
              </div>
              <div class="col">
                <div class="form-group my-3">
                  <label class="form-label">Cook time</label>
                  <input type="type" class="form-control" value="Recipe" />
                  <div class="form-text">in minutes</div>
                </div>
              </div>
              <div class="col">
                <div class="form-group my-3">
                  <label class="form-label">Servings</label>
                  <input type="type" class="form-control" value="Recipe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col"><button class="btn btn-success">Create</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import recipeById from '@/gql/recipeById'
import gql from 'graphql-tag'

export default {
  layout: 'NewItem',
  data() {
    return {
      id: this.$route.params.id,
      updatedRecipe: {
        title: '',
        description: '',
      },
    }
  },
  apollo: {
    recipeById: {
      prefetch: true,
      query: recipeById,
      variables() {
        return { id: this.$route.params.id }
      },
    },
    methods: {
      addUser(e) {
        e.preventDefault()
        const updatedRecipe = this.updatedRecipe
        this.$apollo
          .mutate({
            mutation: gql`
              mutation RecipeUpdateById(
                $id: MongoID!
                $record: UpdateByIdRecipeInput!
              ) {
                recipeUpdateById(_id: $id, record: $record) {
                  record {
                    createdAt
                    updatedAt
                    _id
                    description
                    title
                  }
                }
              }
            `,
            variables: {
              id: this.recipeById._id,
              UpdateByIdRecipeInput: {
                name: this.updatedRecipe.title,
                description: this.updatedRecipe.description,
              },
            },
          })
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            console.error(error)
            this.updatedRecipe = updatedRecipe
          })
      },
    },
  },
}
</script>
