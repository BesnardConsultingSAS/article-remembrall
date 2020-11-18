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
  },
  {
    path: "/series/:id/article/:articleId/script-writing",
    name: "ScriptWriting",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/ScriptWriting.vue")
  },
  {
    path: "/series/:id/article/:articleId/video-recording",
    name: "VideoRecording",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/ArticleDetail.vue")
  },
  {
    path: "/series/:id/article/:articleId/video-editing",
    name: "VideoEditing",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/ArticleDetail.vue")
  },
  {
    path: "/series/:id/article/:articleId/video-annotations",
    name: "VideoAnnotations",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/ArticleDetail.vue")
  },
  {
    path: "/series/:id/article/:articleId/video-publishing",
    name: "VideoPublishing",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/ArticleDetail.vue")
  },
  {
    path: "/series/:id/article/:articleId/article-writing",
    name: "ArticleWriting",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/ArticleDetail.vue")
  },
  {
    path: "/series/:id/article/:articleId/article-publishing",
    name: "ArticlePublishing",
    component: () =>
      import(/* webpackChunkName: "series" */ "../views/ArticleDetail.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
