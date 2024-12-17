<template>
  <div class="container my-4">
    <h2 class="text-center mb-3">Categories of {{ grapeName }}</h2>
    <div class="d-flex flex-wrap justify-content-center gap-3">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="openWineDetails(category.id)"
        class="btn btn-lg btn-primary rounded-pill"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<script>
import wineCategories from "@/data/wineCategories.json";

export default {
  props: ["grapeId", "grapeName"],
  data() {
    return {
      categories: [],
    };
  },
  created() {
    const grapeCategories = wineCategories.find(
      (entry) => entry.grapeId === this.grapeId
    );
    if (grapeCategories) {
      this.categories = grapeCategories.categories;
    }
  },
  methods: {
    openWineDetails(categoryId) {
      this.$router.push({ name: "WineDetails", params: { categoryId } });
    },
  },
};
</script>
