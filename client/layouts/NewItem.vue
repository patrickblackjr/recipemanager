<template>
  <div>
    <Navbar />
    <main>
      <Nuxt />
    </main>
    <RecipeFooter />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'd-flex flex-column h-100',
    },
  },
}
</script>
