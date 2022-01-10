<template>
  <div>
    <b-container>
      <div>
        <b-form @submit="createUser">
          <b-form-group label="Email address" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Name" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        {{ name }}
        {{ email }}
      </div>
    </b-container>
  </div>
</template>

<script>
// import { prisma } from '@prisma/client'

export default {
  name: 'IndexPage',
  data() {
    return {
      name: '',
      email: '',
    }
  },
  methods: {
    createUser: async (event) => {
      event.preventDefault()
      const body = {
        name: this.name,
        email: this.email,
      }
      try {
        const res = await fetch(`http://localhost:3000/api/user`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        const data = await res.json()
        await console.log(data)
      } catch (error) {
        console.error(error)
      }
      this.name = null
      this.email = null
    },
  },
}
</script>
