import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: 'ListAllArticles',
      component: () => import("./pages/ListAllArticles.vue"),
    },
    {
      path: "/create",
      name: 'Create',
      component: () => import("./pages/Create.vue"),
    },
    {
      path: "/read/:id",
      name: 'ReadSingleArticle',
      component: () => import("./pages/ReadSingleArticle.vue"),
    },
    {
      path: "/update/:id",
      name: 'UpdateSingleArticle',
      component: () => import("./pages/UpdateSingleArticle.vue"),
    },
    // {
    //   path: "*",
    //   component: () => import("./pages/NotFound.vue")
    // }
  ],
});

export default router;