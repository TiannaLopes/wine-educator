<template>
  <div class="footer bg-light border-top py-3 text-small">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Side: Copyright -->
        <div class="col-12 col-md-6 text-start mb-2 mb-md-0">
          &copy; {{ publishYear }} Wine App. All rights reserved.
        </div>

        <!-- Right Side: Links -->
        <div class="col-12 col-md-6 text-end">
          <router-link to="/resources" class="footer-link me-3">
            Resources & Citations
          </router-link>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      publishYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  font-family: Arial, sans-serif;
  font-size: 0.9em;
  color: #6c757d;
}

.footer-link {
  text-decoration: none;
  color: #6c757d;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #495057; 
  text-decoration: underline;
}

.container {
  max-width: 1200px;
}
</style>
