<template>
  <div class="container my-5">
    <h1 class="mb-4 text-center">Resources & Citations</h1>
    <p class="lead text-center">
      This application uses data from publicly available resources and research.
    </p>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <a
          href="https://www.winespectator.com"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-link"
        >
          Wine Spectator - Grape Varieties
        </a>
      </li>
      <li class="list-group-item">
        <a
          href="https://www.vivino.com"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-link"
        >
          Vivino - Wine and Grapes
        </a>
      </li>
      <li class="list-group-item">
        <a
          href="https://www.winefolly.com"
          target="_blank"
          rel="noopener noreferrer"
          class="resource-link"
        >
          Wine Folly - Education and Insights
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ResourcesComponent",
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
}

.resource-link {
  text-decoration: none;
  color: #007bff;
  transition: color 0.2s ease;
}

.resource-link:hover {
  color: #0056b3;
  text-decoration: underline;
}
</style>
