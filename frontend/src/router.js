import Vue from "vue";
import Router from "vue-router";

//IMPORT THE COMPONENTS
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
//IMPORT THE COMPONENTS


Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: 'Home',
      component: Home
    },
    {
      path: "/about",
      name: 'About',
      component: About
    },
    // {
    //   path: "/articles/:id",
    //   name: 'Article',
    //   component: () => import("./pages/Article.vue"),
    // },
    // {
    //   path: "*",
    //   component: () => import("./pages/NotFound.vue")
    // }
  ],

});


export default router;