<template>
  <div>{{ userById }}</div>
</template>
<script>
import userQuery from '@/gql/userById'

export default {
  apollo: {
    userById: {
      prefetch: true,
      query: userQuery,
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>
