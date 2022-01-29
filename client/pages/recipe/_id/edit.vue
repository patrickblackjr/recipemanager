<template>
  <div></div>
  <!-- <div>
    <div class="container mb-4">
      <div
        v-if="deleteModal"
        class="modal model-sheet bg-secondary py-5 d-block"
        style="--bs-bg-opacity: 0.5"
      >
        <div class="modal-dialog">
          <div class="modal-content rounded-6 shadow">
            <div class="modal-header border-bottom-0">
              <h5 class="modal-title">Delete "{{ recipeById.title }}"?</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="deleteModal"
                aria-label="Close"
                @click="hideDeleteModal"
              ></button>
            </div>
            <div class="modal-body py-0">
              <p>This cannot be undone.</p>
            </div>
            <div class="modal-footer flex-column border-top-0">
              <button
                type="button"
                class="btn btn-danger btn-lg w-100 mx-0 mb-2"
                @click="deleteRecipe"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-lg w-100 mx-0 mb-2"
                @click="hideDeleteModal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <nuxt-link class="text-decoration-none" to="/recipes"
            ><font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" /> Back
            to all recipes</nuxt-link
          >
        </div>
      </div>
      <div
        v-show="successfulUpdate"
        class="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        Updated recipe successfully.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div v-if="$apollo.queries.recipeById.loading" class="loading">
        <Loader />
      </div>
      <div v-else class="recipe-edit-form">
        <div class="row">
          <div class="col">
            <div>
              <div class="row">
                <div class="col">
                  <div class="row">
                    <div class="col">
                      <p class="text-muted">ID: {{ recipeById._id }}</p>
                      <p class="text-muted">
                        Updated
                        {{ $moment(recipeById.updatedAt).fromNow() }}
                      </p>
                      <p class="text-muted">
                        Created
                        {{ $moment(recipeById.createdAt).fromNow() }}
                      </p>
                    </div>
                  </div>
                  <div>
                    <ol>
                      <li
                        v-for="step in recipeById.instructions"
                        :key="step.stepNumber"
                      >
                        {{ step.description }}
                      </li>
                    </ol>
                  </div>
                  <div class="form-group my-3">
                    <label class="form-label">Recipe title</label>
                    <input
                      v-model="recipeById.title"
                      type="type"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group my-3">
                    <label class="form-label">Recipe description</label>
                    <input
                      v-model="recipeById.description"
                      type="type"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group my-3">
                    <label class="form-label">Prep time</label>
                    <input
                      v-model="recipeById.prepTime"
                      type="text"
                      class="form-control"
                    />
                    <div class="form-text">in minutes</div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group my-3">
                    <label class="form-label">Cook time</label>
                    <input
                      v-model="recipeById.cookTime"
                      type="type"
                      class="form-control"
                    />
                    <div class="form-text">in minutes</div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group my-3">
                    <label class="form-label">Servings</label>
                    <input
                      v-model="recipeById.servingSize"
                      type="type"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <label class="form-label">Add instruction step</label>
                  <div class="input-group mb-3">
                    <input
                      v-model="recipeById.instructions.description"
                      type="text"
                      class="form-control"
                    />
                    <button
                      class="btn btn-success"
                      type="button"
                      @click="addIngredient"
                    >
                      <font-awesome-icon :icon="['fas', 'fa-plus']" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                v-for="step in recipeById.instructions"
                :key="step._id"
                class="row mb-4"
              >
                <div class="col">
                  <label class="form-label">Step #{{ step.stepNumber }}</label>
                  <input
                    v-model="step.description"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button class="btn btn-success" @click="updateRecipe">
              Update
            </button>
          </div>
          <div class="col">
            <button class="btn btn-danger float-end" @click="showDeleteModal">
              <FontAwesomeIcon :icon="['fas', 'trash']" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
// import recipeById from '@/gql/recipeById'
// import recipeUpdateById from '@/gql/recipeUpdateById'
// import recipeRemoveById from '@/gql/recipeRemoveById'
// import recipeUpdateByIdWithInstructions from '@/gql/recipeUpdateByIdWithInstructions'

export default {
  data() {
    return {
      id: this.$route.params.id,
      successfulUpdate: false,
      deleteModal: false,
    }
  },
  apollo: {
    skipAll: true,
    recipeById: {
      prefetch: ({ route }) => ({ id: route.params.id }),
      // query: recipeById,
      variables() {
        return { id: this.id }
      },
    },
  },
  methods: {
    showDeleteModal() {
      this.deleteModal = true
    },
    hideDeleteModal() {
      this.deleteModal = false
    },
    deleteRecipe(e) {
      e.preventDefault()
      this.$apollo
        .mutate({
          // mutation: recipeRemoveById,
          variables: {
            id: this.id,
          },
        })
        .then((data) => {
          console.log(data)
          this.$router.push('/recipes')
        })
        .catch((error) => {
          console.error(error)
        })
    },
    updateRecipe(e) {
      e.preventDefault()
      this.$apollo
        .mutate({
          // mutation: recipeUpdateById,
          variables: {
            id: this.id,
            record: {
              title: this.recipeById.title,
              description: this.recipeById.description,
              instructions: {
                title: this.recipeById.instructions.title,
                description: this.recipeById.instructions.description,
                stepNumber: this.recipeById.instructions.stepNumber,
              },
            },
          },
        })
        .then((data) => {
          console.log(data)
          this.successfulUpdate = true
        })
        .catch((error) => {
          console.error(error)
        })
    },
    addIngredient(e) {
      e.preventDefault()
      this.$apollo
        .mutate({
          // mutation: recipeUpdateByIdWithInstructions,
          variables: {
            id: this.id,
            record: {
              instructions: [
                {
                  title: this.recipeById.instructions.title,
                  description: this.recipeById.instructions.description,
                  stepNumber: this.recipeById.instructions.stepNumber,
                },
              ],
            },
          },
        })
        .then((data) => {
          console.log(data)
          this.successfulUpdate = true
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>

<style lang="css">
.rounded-6 {
  border-radius: 1rem;
}

.modal-sheet .modal-dialog {
  width: 380px;
  transition: bottom 0.75s ease-in-out;
}
</style>
