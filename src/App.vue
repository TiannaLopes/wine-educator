<template>
  <HeaderComponent />
  <NavBarComponent />
  <div class="py-3">
    <router-view />
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: { HeaderComponent, NavBarComponent, FooterComponent },
};
</script>

<style></style>
