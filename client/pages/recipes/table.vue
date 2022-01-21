<template>
  <div class="container">
    <div class="alert alert-danger" role="alert">
      This view is still under construction and is not functioning.
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
    <h1 v-if="$apollo.loading"><Loader /></h1>
    <div v-else class="row row-cols-1 row-cols-md-3">
      <div v-for="recipe in recipeMany" :key="recipe._id" class="col">
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="h4 card-title">{{ recipe.title }}</h2>
            <p class="card-text">{{ recipe.description }}</p>
            <p class="card-text"></p>
          </div>
          <div class="card-footer">
            <div class="row align-items-center">
              <div class="col">
                <small class="text-muted"
                  >Updated {{ $moment(recipe.updatedAt).fromNow() }}</small
                >
              </div>
              <div class="col-2 text-end">
                <nuxt-link
                  :to="`/recipe/${recipe._id}`"
                  prefetch
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
