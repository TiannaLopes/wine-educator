<template>
  <WineDetails :categoryId="categoryId" />
</template>

<script>
import WineDetails from "@/components/WineDetails.vue";

export default {
  name: "WineDetailsView",
  components: { WineDetails },
  data() {
    return {
      categoryId: this.$route.params.categoryId,
    };
  },
};
</script>
