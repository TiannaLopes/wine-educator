<template>
  <div class="container mt-5">
    <h1 class="text-center title mb-4">Wine Grape Varieties</h1>

    <!-- Card Sections -->
    <div v-for="(category, index) in grapeData" :key="index" class="card-section mb-4">
      <!-- Section Title -->
      <div class="section-header" :style="{ backgroundColor: category.sectionColor }">
        <h3>{{ category.name }}</h3>
      </div>

      <!-- Buttons for Grapes -->
      <div class="grape-buttons p-3">
        <button
          v-for="(grape, gIndex) in category.grapes"
          :key="gIndex"
          class="grape-btn"
          :style="{ backgroundColor: category.buttonColor }"
        >
          {{ grape }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Import JSON Data
import grapeData from "@/data/grapeData.json";

export default {
  name: "WineGrapeList",
  data() {
    return {
      grapeData,
    };
  },
};
</script>

<style scoped>
/* General Container */
.container {
  font-family: 'Arial', sans-serif;
  color: #4a4a4a;
}

/* Title Styling */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #8B1E3F;
}

/* Card Section Container */
.card-section {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s;
}

.card-section:hover {
  transform: translateY(-5px);
}

/* Section Header */
.section-header {
  padding: 1rem;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Grape Buttons */
.grape-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.grape-btn {
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  cursor: pointer;
}

.grape-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
