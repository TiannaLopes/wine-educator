<template>
  <WineCategoryList :grapeId="grapeId" :grapeName="grapeName" />
</template>

<script>
import WineCategoryList from "@/components/WineCategoryList.vue";

export default {
  name: "WineCategoryView",
  components: { WineCategoryList },
  data() {
    return {
      grapeId: this.$route.params.grapeId,
      grapeName: this.$route.params.grapeName,
    };
  },
};
</script>
