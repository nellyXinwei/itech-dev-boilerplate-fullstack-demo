<template>
  <div>
    <!-- HEADER -->
    <div style="display: flex; width: 100%">
      <span><router-link to="/"> Back</router-link></span>
      <h1>Add New Article</h1>
    </div>
    <!-- HEADER -->

    <form v-on:submit="addArticle">
      <label for="name">Name</label>
      <input id="name" type="name" v-model="name" />{{ name }}
      <button type="submit">Add Article</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddArticle",
  data() {
    return {
      name: "",
    };
  },

  methods: {
    addArticle: async function (event) {
      event.preventDefault();
      console.log("Add this article: " + this.name);

      try {
        const response = await axios.post("http://localhost:1337/articles", {
          name: this.name,
          content: "",
          thumbnail: "",
          categories: "hacker",
          author: "",
        });
        console.log(response);
      } catch (error) {
        this.error = error;
      }

      this.name = "";
    },
  },
};
</script>

<style>
</style>