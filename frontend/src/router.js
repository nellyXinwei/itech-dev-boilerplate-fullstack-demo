import Vue from "vue";
import Router from "vue-router";

//IMPORT THE COMPONENTS
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import AddArticle from "./pages/AddArticle.vue"
import Article from "./pages/Article.vue"
import UpdateArticle from "./pages/UpdateArticle.vue"
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
    {
      path: "/add-article",
      name: 'AddArticle',
      component: AddArticle
    },
    {
      path: "/articles/:id",
      name: "Article",
      component: Article
    },
    {
      path: "/articles/update/:id",
      name: "UpdateArticle",
      component: UpdateArticle
    }
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