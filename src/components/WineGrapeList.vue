<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Wine Grape Varieties</h1>

    <!-- Iterate through each category -->
    <div v-for="(category, index) in grapeData" :key="index" class="mb-5">
      <!-- Section Header -->
      <h3 :class="['text-uppercase', 'mb-3', category.sectionClass]">
        {{ category.name }}
      </h3>

      <!-- Buttons for Grapes -->
      <div class="d-flex flex-wrap gap-2">
        <button
          v-for="(grape, gIndex) in category.grapes"
          :key="gIndex"
          class="btn btn-lg text-white rounded-pill"
          :style="{ backgroundColor: grape.buttonColor }"
          @click="navigateToCategories(grape.id, grape.name)"
        >
          {{ grape.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import grapeData from "@/data/grapeData.json";

export default {
  name: "WineGrapeList",
  data() {
    return {
      grapeData, // Load the imported JSON data
    };
  },
  methods: {
    navigateToCategories(grapeId, grapeName) {
      // Use Vue Router to navigate to WineCategoryView with parameters
      this.$router.push({
        name: "WineCategory",
        params: { grapeId, grapeName },
      });
    },
  },
};
</script>

<style scoped>
.gap-2 {
  gap: 0.5rem; /* Bootstrap spacing utility extension */
}

h3 {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
}

button {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
