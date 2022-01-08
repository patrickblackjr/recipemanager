<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe._id" class="recipe-cards">
      <b-row>
        <b-col cols="6" offset="3">
          <b-card :title="recipe.title" class="mb-2">
            <b-card-text>
              {{ recipe.description }}
            </b-card-text>
            <b-button
              class="float-right mx-2"
              @click="populateRecipeToEdit(currentRecipe)"
              >View</b-button
            >
            <b-dropdown class="float-right" text="Options">
              <b-dropdown-item-button>Second item</b-dropdown-item-button>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item-button @click="deleteRecipe(recipe._id)"
                >Delete</b-dropdown-item-button
              >
            </b-dropdown>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// :to="`recipe/${recipe._id}`"
import axios from 'axios'

export default {
  data: () => ({
    recipes: [],
    currentRecipe: [],
  }),
  async fetch() {
    this.recipes = await fetch('http://localhost:3001/api/recipes').then(
      (res) => res.json()
    )
  },
  methods: {
    deleteRecipe: (id) => {
      axios.delete(`http://localhost:3001/api/recipe/${id}`).then(() => {
        this.$bvToast.toast(`Test`, {
          title: `Title`,
          solid: true,
        })
        location.reload()
      })
    },
    populateRecipeToEdit: (currentRecipe) => {
      this.currentRecipe = Object.assign({}, currentRecipe)
      console.log(this.currentRecipe)
    },
  },
  fetchOnServer: false,
}
</script>
