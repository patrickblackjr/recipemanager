<template>
  <div>
    <b-container>
      <RecipeList :key="componentKey" />
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'IndexPage',
  data: () => ({
    recipes: [],
    componentKey: 0,
  }),
  fetchOnServer: false,
}
</script>
