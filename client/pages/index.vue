<template>
  <div>
    <div class="container my-4">
      <form @submit="addUser">
        <div class="form-floating mb-3">
          <input
            id="email"
            v-model="newUser.email"
            type="email"
            class="form-control"
            placeholder="name@example.com"
          />
          <label for="email">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            id="name"
            v-model="newUser.name"
            type="name"
            class="form-control"
            placeholder="Name"
          />
          <label for="email">Name</label>
        </div>
        <button type="submit" class="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    userMany: gql`
      {
        userMany {
          name
          email
          _id
          updatedAt
          createdAt
        }
      }
    `,
  },
  data() {
    return {
      userMany: null,
      newUser: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    addUser(e) {
      e.preventDefault()
      const newUser = this.newUser
      this.newUser = {}
      this.$apollo
        .mutate({
          mutation: gql`
            mutation UserCreateOne($userCreateOneRecord: CreateOneUserInput!) {
              userCreateOne(record: $userCreateOneRecord) {
                record {
                  name
                  email
                  _id
                  updatedAt
                  createdAt
                }
              }
            }
          `,
          variables: {
            userCreateOneRecord: {
              name: newUser.name,
              email: newUser.email,
            },
          },
        })
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.error(error)
          this.newUser = newUser
        })
    },
  },
}
</script>
