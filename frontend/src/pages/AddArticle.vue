// Create new Article = post request
// new page: AddArticle.vue
// form
// post request 


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
export default {
  name: "AddArticle",
  data() {
    return {
      name: "",
    };
  },

  methods: {
    addArticle(event) {
      event.preventDefault();
      console.log("Add this article" + this.name);
      this.name = "";
    },
  },
};
</script>

<style>
</style>