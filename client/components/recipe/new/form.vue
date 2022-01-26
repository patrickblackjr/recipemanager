<template>
  <div>
    <div class="row">
      <div class="col">
        <LayoutFormInput
          v-model="title"
          label="Recipe title"
          placeholder="Pot Roast"
        />
        {{ title }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <LayoutFormInput
          v-model="description"
          label="Description"
          placeholder="A delicious mix of meat, potatoes, and vegetables."
          description="A brief description of the recipe."
        />
      </div>
    </div>
    <!-- <div class="row">
      <div class="col">
        <LayoutFormInput label="Prep time" description="in minutes" />
      </div>
      <div class="col">
        <LayoutFormInput label="Cook time" description="in minutes" />
      </div>
      <div class="col">
        <LayoutFormInput label="Servings" />
      </div>
    </div> -->
    <div class="row">
      <div class="col">
        <button class="btn btn-success" @click="addRecipe">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
// import recipeCreateOne from '@/gql/recipeCreateOne'

export default {
  data() {
    return {
      title: '',
      description: '',
    }
  },
  methods: {
    addRecipe(e) {
      const title = this.title
      const description = this.description
      this.title = ''
      this.description = ''
      e.preventDefault()
      this.$apollo
        .mutate({
          // mutation: recipeCreateOne,
          variables: {
            record: {
              title: title,
              description: description,
            },
          },
        })
        .then(() => {
          this.$router.push(`/recipes/`)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>
