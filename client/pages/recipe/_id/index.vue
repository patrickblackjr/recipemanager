<template>
  <div>
    <!-- <div v-if="$apollo.queries.recipeById.loading"><Loader /></div> -->
    <div>{{ $route.params.id }}</div>
    <!-- <div v-else>{{ recipeById.title }}</div> -->
  </div>
</template>

<script>
import QueryRecipeById from '@/gql/QueryRecipeById.gql'

export default {
  data() {
    return {}
  },
  apollo: {
    recipeById: {
      query: QueryRecipeById,
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
  methods: {},
}
</script>
