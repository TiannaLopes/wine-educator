<template>
  <div>
    <h2>{{ wineName }}</h2>
    <div v-if="wineDetails">
      <p><strong>Grapes:</strong> {{ wineDetails.grapes }}</p>
      <p><strong>Flavor Notes:</strong> {{ wineDetails.flavorNotes }}</p>
      <p><strong>Food Pairing:</strong> {{ wineDetails.pairing }}</p>
    </div>
    <p v-else>No wine details found.</p>
  </div>
</template>

<script>
import twineData from "@/data/region-info.json";

export default {
  name: "WineDetail",
  props: ["wineName"],
  computed: {
    wineDetails() {
      return twineData.find((entry) => entry.name === this.wineName)?.content || null;
    },
  },
};
</script>
