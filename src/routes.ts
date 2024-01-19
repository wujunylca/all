import { createRouter, createWebHashHistory } from "vue-router";
import BigScree from "./pages/BigScree/index.vue";
import Home from "./pages/Home/index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/bigscree", component: BigScree },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
