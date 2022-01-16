<template>
  <div class="container">
    <h1 v-if="$apollo.loading"><Loader /></h1>
    <div v-else class="card-group">
      <div v-for="recipe in recipeMany" :key="recipe._id" class="card">
        <div class="card-body">
          <h2 class="h4 card-title">{{ recipe.title }}</h2>
          <p class="card-text">{{ recipe.description }}</p>
          <p class="card-text"></p>
        </div>
        <div class="card-footer">
          <div class="row align-items-center">
            <div class="col">
              <small class="text-muted"
                >Last updated {{ $moment(recipe.updatedAt).fromNow() }}</small
              >
            </div>
            <div class="col text-end">
              <nuxt-link :to="`/recipe/${recipe._id}`" class="btn btn-secondary"
                >Edit</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recipeMany from '../gql/recipeMany'

export default {
  apollo: {
    recipeMany: {
      prefetch: true,
      query: recipeMany,
    },
  },
  data() {
    return {}
  },
}
</script>
