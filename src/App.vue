<template>
  <div class="app-container d-flex flex-column vh-100">
    <!-- Sticky Header -->
    <header>
      <HeaderComponent class="sticky-top" />
    </header>

    <!-- Sticky Navbar -->
    <nav>
      <NavBarComponent class="sticky-top" />
    </nav>

    <!-- Main Content Area -->
    <main class="flex-grow-1 py-3">
      <router-view />
    </main>

    <!-- Sticky Footer -->
    <footer>
      <FooterComponent class="sticky-bottom" />
    </footer>
  </div>
</template>

<script>
import HeaderComponent from "@/components/core/HeaderComponent.vue";
import NavBarComponent from "@/components/core/NavBarComponent.vue";
import FooterComponent from "@/components/core/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app-container {
  display: flex;
  flex-direction: column;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020; 
}

.sticky-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}

main {
  overflow-y: auto;
}
</style>
