<template>
  <div>
    <!-- LIST ALL ARTICLE -->
    <div style="display: flex; width: 100%">
      <div v-for="eachArticle in filterArticles" v-bind:key="eachArticle.id">
        <ArticleCard v-bind:eachArticle="eachArticle"></ArticleCard>
      </div>
    </div>
    <!-- LIST ALL ARTICLE -->
    <br /><br /><br /><br />

    <div style="display: flex; width: 100%">
      <h2>Hacker Articles:</h2>
      <div v-for="eachArticle in hackerArticles" v-bind:key="eachArticle.id">
        <ArticleCard v-bind:eachArticle="eachArticle"></ArticleCard>
      </div>
    </div>

    <br /><br /><br /><br />

    <div style="display: flex; width: 100%">
      <h2>Hipster Articles:</h2>
      <div v-for="eachArticle in hipsterArticles" v-bind:key="eachArticle.id">
        <ArticleCard v-bind:eachArticle="eachArticle"></ArticleCard>
      </div>
    </div>

    <br /><br /><br /><br />

    <div style="display: flex; width: 100%">
      <h2>Hustler Articles:</h2>
      <div v-for="eachArticle in hustlerArticles" v-bind:key="eachArticle.id">
        <ArticleCard v-bind:eachArticle="eachArticle"></ArticleCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
export default {
  name: "Home",

  components: {
    ArticleCard,
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