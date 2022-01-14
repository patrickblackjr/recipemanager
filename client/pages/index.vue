<template>
  <div>
    <b-container class="my-4">
      <b-card-group>
        <div v-for="user in userMany" :key="user._id" class="mx-2">
          <b-card
            class="mb-3"
            :title="user.name"
            :sub-title="user.email"
            footer-tag="footer"
          >
            <b-card-text>
              <p>{{ $moment(user.createdAt).format('MM/DD/YYYY hh:mm A') }}</p>
            </b-card-text>
            <b-button :to="`profile/${user._id}`">View profile</b-button>
          </b-card>
        </div>
      </b-card-group>
      <b-form @submit="addUser">
        <b-form-group label="Email address" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="newUser.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="newUser.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mt-2">Submit</b-button>
      </b-form>
    </b-container>
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
  name: 'IndexPage',
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
