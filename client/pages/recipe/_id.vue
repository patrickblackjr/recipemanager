<template>
  <div>
    <div class="container">
      <div class="row mb-5">
        <div class="col">
          <nuxt-link class="text-decoration-none" to="/recipes"
            ><font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" /> Back
            to all recipes</nuxt-link
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          {{ recipeById }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import recipeById from '@/gql/recipeById'

export default {
  data() {
    return {
      id: this.$route.params.id,
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
    // userById: {
    //   skip() {},
    //   prefetch: true,
    //   query: userById,
    //   variables() {
    //     return { id: this.userId }
    //   },
    // },
  },
}
</script>
