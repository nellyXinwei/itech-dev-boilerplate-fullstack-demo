<template>
  <div>
    <h1>{{ article.name }} by {{ article.author.name }}</h1>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Article",

  data() {
    return {
      article: [],
    };
  },

  mounted() {
    const id = this.$route.params.id;
    axios.get(`http://localhost:1337/articles/${id}`).then((response) => {
      this.article = response.data;
      // console.log(this.articles);
    });
  },
};
</script>

<style>
</style>