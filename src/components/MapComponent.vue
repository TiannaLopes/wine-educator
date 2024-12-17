<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <div id="map" @click="handleRegionClick('region1')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  props: {
    getEntries: {
      type: Array,
      default: () => [], // Ensures an empty array if not provided
    },
  },
  computed: {
    /*
     * Computed to call the global simplemap scripts in index.html
     */
    simplemaps_type() {
      return window.simplemaps_worldmap;
    },
    filteredRegions() {
      let regionMap = this.simplemaps_type;

      Object.entries(regionMap.mapdata.state_specific).forEach((val) => {
        if (this.selectedRegionIds.includes(val[0])) {
          val[1].color = "#0d6efd";
        }
        return val;
      });
      return regionMap;
    },
    selectedRegionIds() {
      // Check for valid getEntries and map through it
      return this.getEntries
        .map((entry) => entry?.selectedRegion?.id)
        .filter((id) => id !== null && id !== undefined);
    },
  },
  methods: {
    handleRegionClick(regionId) {
      this.$emit("region-clicked", regionId);
    },
  },
  mounted() {
    if (this.simplemaps_type?.load) {
      this.filteredRegions.load();
    }
  },
};
</script>
