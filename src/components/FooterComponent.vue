<!-- Do not change this file. -->

<template>
  <div>
    <div class="container-fluid border-top py-3 text-small">
      <div class="row">
        <div class="col text-start">&copy; {{ publishYear }}</div>
        <div class="col text-end"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data: () => {
    return {
      publishYear: new Date().getFullYear(),
    };
  },
  props: {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
.text-small {
  font-size: 0.8em;
}

.btn {
  font-size: inherit;
}

a,
.btn {
  text-decoration: none;
}

a:hover,
.btn:hover {
  text-decoration: underline;
}
</style>
