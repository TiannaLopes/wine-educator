<template>
  <div class="container my-5">
    <h1 class="text-center">{{ wineDetails.name }}</h1>
    <p class="lead text-center">{{ wineDetails.description }}</p>

    <h3>Perfect Pairings</h3>
    <ul>
      <li v-for="pairing in wineDetails.pairings" :key="pairing">{{ pairing }}</li>
    </ul>

    <h3>Top Regions</h3>
    <ul>
      <li v-for="region in wineDetails.regions" :key="region">{{ region }}</li>
    </ul>
  </div>
</template>

<script>
import wineDetailsData from "@/data/wineDetails.json";

export default {
  props: ["categoryId"],
  data() {
    return {
      wineDetails: {},
    };
  },
  created() {
    this.wineDetails = wineDetailsData.find(
      (detail) => detail.id === this.categoryId
    );
  },
};
</script>
