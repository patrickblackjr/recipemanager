<template>
  <div>
    <div class="container">
      <h1 v-if="$apollo.loading"><Loader /></h1>
      <div v-else class="row row-cols-1 row-cols-md-3">
        <div v-for="recipe in allRecipes" :key="recipe.id" class="col">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="h4 card-title">{{ recipe.title }}</h2>
              <p class="card-text">
                {{ recipe.description | truncate(30) }}
              </p>
              <p class="card-text"></p>
              <div class="row align-items-center">
                <div class="col">
                  <small class="text-muted"
                    >Updated {{ $moment(recipe.updatedAt).fromNow() }}</small
                  >
                </div>
                <div class="col-4 text-end">
                  <nuxt-link
                    :to="`/recipe/${recipe.id}/`"
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
  </div>
</template>

<script>
import AllRecipesCardView from '@/gql/AllRecipesCardView.gql'

export default {
  apollo: {
    allRecipes: {
      query: AllRecipesCardView,
    },
  },
  filters: {
    truncate(string, value) {
      if (string == null) return `\xa0`
      return (string || '').substring(0, value) + `...`
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
