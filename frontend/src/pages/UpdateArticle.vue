<template>
  <div>
    <!-- HEADER -->

    <form v-on:submit="updateArticle">
      <label for="name">Name</label>
      <input id="name" type="text" v-model="article.name" />
      <br /><br /><br />

      <label for="author">Author</label>
      <input id="author" type="text" v-model="article.author.name" />
      <br /><br /><br />

      <label for="content">Content</label>
      <input id="content" type="text" v-model="article.content" />
      <br /><br /><br />

      <button type="submit">Update Article</button>
    </form>
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
    updateArticle: async function (event) {
      event.preventDefault();
      console.log("Update this article: " + this.article);

      try {
        const response = await axios.post(
          "http://localhost:1337/articles",
          this.article
        );
        console.log(response);
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style>
</style>