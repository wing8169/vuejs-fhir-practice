import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/drag-drop",
      name: "drag-drop",
      // lazy loading
      component: () => import("../views/DragDropView.vue"),
    },
  ],
});

export default router;
