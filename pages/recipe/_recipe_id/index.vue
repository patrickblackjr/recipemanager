<template>
  <div>
    {{ recipe }}
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data: () => ({
    recipe: {},
  }),
  async created() {
    this.recipe = await fetch(
      `http://localhost:3001/api/recipe/${this.recipe._id}`
    ).then((res) => res.json())
  },
}
</script>
