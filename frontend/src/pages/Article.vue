<template>
  <div>
    <!-- HEADER -->
    <h1>{{ article.name }} by {{ article.author.name }}</h1>

    <div style="display: flex">
      <router-link :to="`/articles/update/${article.id}`">Update</router-link> |
      <button v-on:click="deleteArticle">Delete</button>
    </div>
    <!-- HEADER -->
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

  methods: {
    deleteArticle(event) {
      const id = this.$route.params.id;
      event.preventDefault();
      axios
        .delete(`http://localhost:1337/articles/${id}`)
        .then((response) => {
          console.log("Deleted Article" + response.data);
          this.$router.push("/");
        })
        .catch((error) => console.log("Opps didnt delete" + error));
    },
  },
};
</script>

<style>
</style>