<template>
  <div>
    <h1>Wines of {{ regionName }}</h1>
    <ul>
      <li v-for="country in countries[regionName]" :key="country">
        <router-link :to="`/wine/${country}`">{{ country }}</router-link>
      </li>
    </ul>
    <router-link to="/">Back to Map</router-link>
  </div>
</template>

<script>
export default {
  name: "RegionView",
  props: ["name"],
  computed: {
    regionName() {
      return this.name; // Dynamic region passed via route params
    },
    countries() {
      return {
        Europe: ["France", "Italy", "Spain", "Germany", "Portugal"],
        "North America": ["California", "Oregon", "Canada"],
        "South America": ["Argentina", "Chile"],
        Australia: ["Barossa Valley", "Hunter Valley"],
        Asia: ["China", "Japan"],
        Africa: ["South Africa"],
      };
    },
  },
};
</script>
