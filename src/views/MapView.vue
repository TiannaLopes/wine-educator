<template>
  <div>
    <MapComponent @region-clicked="handleRegionClick" />
    <DecisionComponent />
  </div>
</template>

<script>
import MapComponent from "@/components/MapComponent.vue";
import DecisionComponent from "@/components/DecisionComponent.vue";
import { useDecisionStore } from "@/stores/decisionStore";

export default {
  name: "MapView",
  components: {
    MapComponent,
    DecisionComponent,
  },
  setup() {
    const decisionStore = useDecisionStore();

    const handleRegionClick = (regionId) => {
      decisionStore.startDecision(regionId);
    };

    return {
      handleRegionClick,
    };
  },
};
</script>

<style scoped></style>
