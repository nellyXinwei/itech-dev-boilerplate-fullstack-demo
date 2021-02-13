<template>
  <div>
    <!-- HEADER -->
    <div style="display: flex; align-items: center">
      <h1>Axios Tutorial</h1>
      <div style="margin: 0 20px"><input type="text" v-model="search" /></div>
    </div>
    <!-- HEADER -->

    <!-- LIST ALL ARTICLE -->
    <div style="display: flex; width: 100%">
      <div v-for="eachArticle in filterArticles" v-bind:key="eachArticle.id">
        <Article v-bind:eachArticle="eachArticle"></Article>
      </div>
    </div>
    <!-- LIST ALL ARTICLE -->
    <br /><br /><br /><br />

    <div style="display: flex; width: 100%">
      <h2>Hacker Articles:</h2>
      <div v-for="eachArticle in hackerArticles" v-bind:key="eachArticle.id">
        <Article v-bind:eachArticle="eachArticle"></Article>
      </div>
    </div>

    <br /><br /><br /><br />

    <div style="display: flex; width: 100%">
      <h2>Hipster Articles:</h2>
      <div v-for="eachArticle in hipsterArticles" v-bind:key="eachArticle.id">
        <Article v-bind:eachArticle="eachArticle"></Article>
      </div>
    </div>

    <br /><br /><br /><br />

    <div style="display: flex; width: 100%">
      <h2>Hustler Articles:</h2>
      <div v-for="eachArticle in hustlerArticles" v-bind:key="eachArticle.id">
        <Article v-bind:eachArticle="eachArticle"></Article>
      </div>
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

    hackerArticles() {
      return this.articles.filter((eachArticle) => {
        return eachArticle.categories[0].name.toLowerCase().includes("hacker");
      });
    },

    hipsterArticles() {
      return this.articles.filter((eachArticle) => {
        return eachArticle.categories[0].name.toLowerCase().includes("hipster");
      });
    },

    hustlerArticles() {
      return this.articles.filter((eachArticle) => {
        return eachArticle.categories[0].name.toLowerCase().includes("hustler");
      });
    },
  },
};
</script>

<style>
</style>