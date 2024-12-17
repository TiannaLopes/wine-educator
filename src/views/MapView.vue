<template>
  <div>
    <MapComponent @region-clicked="handleRegionClick" />
    <DecisionComponent v-if="selectedRegion" :region="selectedRegion" />
  </div>
</template>

<script>
import MapComponent from "@/components/MapComponent.vue";
import DecisionComponent from "@/components/DecisionComponent.vue";
import { useRouter } from "vue-router";

export default {
  name: "MapView",
  components: {
    MapComponent,
    DecisionComponent,
  },
  data() {
    return {
      selectedRegion: null,
    };
  },
  setup() {
    const router = useRouter();

    const handleRegionClick = (regionName) => {
      // Set regionName and navigate
      router.push({ name: "Region", params: { name: regionName } });
    };

    return {
      handleRegionClick,
    };
  },
};
</script>
