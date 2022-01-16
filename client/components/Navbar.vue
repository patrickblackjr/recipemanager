<template>
  <div>
    <header>
      <div class="px-3 py-2 bg-dark text-white">
        <div class="container">
          <div
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
          >
            <a
              href="/"
              class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <p class="h4 mt-1">Recipe Manager</p>
            </a>

            <ul
              class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
            >
              <li>
                <nuxt-link to="/" class="nav-link text-white rounded">
                  <!-- <font-awesome-icon
                    :icon="['fas', 'home']"
                    class="bi d-block mx-auto mb-1 w-100"
                  /> -->
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/recipes" class="nav-link text-white rounded">
                  <!-- <font-awesome-icon
                    :icon="['fas', 'book']"
                    class="bi d-block mx-auto mb-1 w-100"
                  /> -->
                  Recipes
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-3 py-2 border-bottom mb-3">
        <div class="container d-flex flex-wrap justify-content-center">
          <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div class="text-end">
            <div class="dropdown">
              <button
                id="dropdownMenuLink"
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <font-awesome-icon :icon="['fas', 'plus']" />
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <nuxt-link class="dropdown-item" to="/recipe/new"
                    >New recipe</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}
</style>
