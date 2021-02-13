<template>
  <div>
    <div style="display: flex; align-items: center">
      <h1>Axios Tutorial</h1>
      <div style="margin: 0px 20px"><input type="text" v-model="search" /></div>
    </div>

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