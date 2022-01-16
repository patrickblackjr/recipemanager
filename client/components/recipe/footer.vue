<template>
  <div>
    <footer class="footer py-2 bg-light w-100">
      <div class="container">
        <div class="btn-group dropup">
          <button type="button" class="btn btn-success">Create</button>
          <button
            type="button"
            class="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Options</span>Options
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item bg-danger text-white" href="#">Cancel</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Create and add another</a>
              <a class="dropdown-item" href="#">Create and back to list</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="css">
footer {
  position: absolute;
  bottom: 0;
}
</style>
