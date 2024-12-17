<!-- Change only the identified area for routes -->

<template>
  <nav
    class="navbar navbar-expand-sm navbar-light bg-dark border-bottom border-top"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <RouterLink
            :to="{ name: 'MapView' }"
            class="nav-link text-light border-end"
            >By Wine Region</RouterLink
          >
          <RouterLink
            :to="{ name: 'MapView' }"
            class="nav-link text-light border-end"
            >By Grapes</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {},
};
</script>
