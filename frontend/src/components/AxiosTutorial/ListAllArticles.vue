<template>
  <div>
    Axios Tutorial

    <div><input type="text" v-model="search" /></div>

    <div v-for="eachArticle in filterArticles" v-bind:key="eachArticle.id">
      <Article v-bind:eachArticle="eachArticle"></Article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Article from "./Article";
export default {
  name: "ListAllArticles",

  components: {
    Article,
  },

  data() {
    return {
      articles: [],
      search: "",
    };
  },

  created() {
    axios.get("http://localhost:1337/articles").then((response) => {
      this.articles = response.data;
      // console.log(this.articles);
    });
  },

  computed: {
    filterArticles() {
      return this.articles.filter((eachArticle) => {
        return eachArticle.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style>
</style>