import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/series/:id",
    name: "SeriesDetail",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/SeriesDetail.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
