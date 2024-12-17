import { defineStore } from "pinia";

export const useMapStore = defineStore("mapStore", {
  state: () => ({
    entries: [], // Local entries
    selectedRegion: {}, // Selected region state
  }),
  actions: {
    setSelectedRegion(region) {
      if (region && region.selectedRegion) {
        this.selectedRegion = { ...region.selectedRegion };
      } else {
        this.selectedRegion = { ...region };
      }
    },
    addEntry(entry) {
      this.entries.push(entry);
    },
  },
  getters: {
    getEntries: (state) => state.entries,
    selectedRegionIds: (state) =>
      state.entries
        .map((entry) => entry?.selectedRegion?.id)
        .filter((id) => id !== null), // Filter out empty IDs
  },
});
