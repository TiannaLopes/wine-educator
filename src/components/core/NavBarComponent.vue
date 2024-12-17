<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark border-bottom border-top"
  >
    <div class="container-fluid">
      <!-- Navbar Toggler for Mobile -->
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

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <!-- Existing Routes -->
          <RouterLink
            :to="{ name: 'MapView' }"
            class="nav-link text-light border-end"
            >By Wine Region</RouterLink
          >
          <RouterLink
            :to="{ name: 'GrapeView' }"
            class="nav-link text-light border-end"
            >By Grapes</RouterLink
          >

          <!-- New Routes -->
          <RouterLink
            :to="{ name: 'WineCategory', params: { grapeId: 'cabernet_sauvignon', grapeName: 'Cabernet Sauvignon' } }"
            class="nav-link text-light border-end"
          >
            Wine Categories
          </RouterLink>

          <RouterLink
            :to="{ name: 'WineDetails', params: { categoryId: 'red_wine' } }"
            class="nav-link text-light"
          >
            Wine Details
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav-link {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-link:hover {
  color: #f8f9fa; /* Light hover effect */
  background-color: rgba(255, 255, 255, 0.1);
}

.border-end {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
