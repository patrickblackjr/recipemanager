<template>
  <div class="container">
    <h1 v-if="$apollo.loading"><Loader /></h1>
    <div v-else class="row row-cols-1 row-cols-md-3">
      <div v-for="recipe in recipeMany" :key="recipe._id" class="col">
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="h4 card-title">{{ recipe.title }}</h2>
            <p class="card-text">{{ recipe.description }}</p>
            <p class="card-text"></p>
            <div class="row align-items-center">
              <div class="col">
                <small class="text-muted"
                  >Updated {{ $moment(recipe.updatedAt).fromNow() }}</small
                >
              </div>
              <div class="col-4 text-end">
                <nuxt-link
                  :to="`/recipe/${recipe._id}`"
                  class="btn btn-secondary"
                  >Edit</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recipeMany from '@/gql/recipeMany'

export default {
  apollo: {
    recipeMany: {
      prefetch: true,
      query: recipeMany,
      pollInterval: 1000,
    },
  },
  data() {
    return {}
  },
}
</script>
