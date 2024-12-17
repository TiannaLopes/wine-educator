<template>
  <div>
    <h2>{{ region }}</h2>
    <div v-if="regionContent">
      <ul>
        <li v-for="link in regionContent.links" :key="link">
          <router-link :to="`/region/${link}`">{{ link }}</router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No content available for this region.</p>
    </div>
  </div>
</template>

<script>
import twineData from "@/data/region-info.json"; // Convert Twine to JSON

export default {
  name: "DecisionComponent",
  props: {
    region: {
      type: String,
      required: true,
    },
  },
  computed: {
    regionContent() {
      // Match region name with Twine JSON data
      return twineData.find((entry) => entry.name === this.region);
    },
  },
};
</script>
