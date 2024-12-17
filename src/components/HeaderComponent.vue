<!-- Do not change this file. -->

<template>
  <div class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-brand d-flex">
        <img
          src="@/assets/wine.svg"
          alt="WineInfo"
          height="60"
          class="d-inline-flex align-top me-3 pe-3 border-end"
        />
        <div class="title me-3 mt-3 fw-bold">{{ title }}</div>
        <div class="subtitle mt-3">{{ subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* Do not change this file. */

export default {
  name: "Header",
  data() {
    return {
      title: "Wine Guide by Region ",
      subtitle: "Built with VueJS 3, Pinia, Simple Maps, Twine",
    };
  },
};
</script>
