<template>
  <div>
    <b-container>
      <div v-if="$apollo.queries.user.loading">Loading...</div>
      <div v-else>{{ user }}</div>
    </b-container>
  </div>
</template>

<script>
import usersGql from '~/apollo/queries/fetchuser.gql'

export default {
  name: 'IndexPage',
  data: () => ({
    apollo: {
      user: {
        prefetch: true,
        query: usersGql,
        variables() {
          return { id: 1 }
        },
        update(data) {
          return data.user
        },
      },
    },
  }),
}
</script>
