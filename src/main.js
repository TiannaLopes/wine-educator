import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/css/style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).mount("#app");
