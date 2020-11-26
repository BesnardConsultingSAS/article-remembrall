import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import { articleSteps } from "../data/data";
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
  },
  {
    path: "/series/new",
    name: "AddSeries",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/AddSeries.vue")
  },
  {
    path: "/series/:id/article/new",
    name: "AddArticle",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/AddArticle.vue")
  }
];

articleSteps.forEach(function(step) {
  routes.push({
    path: `/series/:id/article/:articleId/${step.urlPath}`,
    name: step.routeName,
    component: () =>
      import(
        /* webpackChunkName: "series" */ `../views/${step.componentPath}.vue`
      )
  });
});

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
