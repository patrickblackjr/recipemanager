<template>
  <div>
    <div class="row">
      <div class="col">
        <LayoutFormInput label="Recipe title" placeholder="Pot Roast" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <LayoutFormInput
          label="Description"
          placeholder="A delicious mix of meat, potatoes, and vegetables."
          description="A brief description of the recipe."
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <LayoutFormInput label="Prep time" description="in minutes" />
      </div>
      <div class="col">
        <LayoutFormInput label="Cook time" description="in minutes" />
      </div>
      <div class="col">
        <LayoutFormInput label="Servings" />
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
