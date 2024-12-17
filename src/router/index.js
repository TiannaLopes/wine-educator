/*
  When changing this file:
  
  1. just import new routes, and define them in the array.
  2. If you want to disable authentication, remove the `beforeEnter` property.
*/

import { createRouter, createWebHashHistory } from "vue-router";

import MapView from "@/views/MapView";
import GrapeView from "@/views/GrapeView"
import ResourcesView from "@/views/ResourcesView.vue";
const routes = [
  {
    path: "/",
    name: "MapView",
    component: MapView,
  },  {
    path: "/grape",
    name: "GrapeView",
    component: GrapeView,
  },  {
    path: "/resources",
    name: "ResourcesView",
    component: ResourcesView,
  },
];

/*
 *
 * https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode
 *
 * We use hash mode (createWebHashHistory), instead of
 * html5 mode (createWebHistory) so that it works on our S3 deployments.
 * The html5 mode is more SEO-friendly, but that isn't a concern with our
 * applications.
 */
/*
 * The 'linkExactActiveClass' is intended to style any router-view which
 * connects to the active view with the bold. It primarily will appear
 * in the `navbar`, but it will also bold any router-views, including buttons.
 */
const router = createRouter({
  mode: "history",
  linkExactActiveClass: "fw-bold",
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
