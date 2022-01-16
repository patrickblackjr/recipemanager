<template>
  <div v-if="loading">
    <img
      width="100em"
      class="mx-auto d-block img-fluid"
      src="@/assets/svg/loader.svg"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
