<template>
  <div id="app">
    <!-- <ListOfTodos /> -->
    <ListAllArticles />
  </div>
</template>

<script>
// import ListOfTodos from "./components/Todos/ListOfTodos";
// import ListAllArticles from "./components/3.AxiosTutorial/ListAllArticles.vue";
import ListAllArticles from "./components/Z.AxiosTutorialNotes/ListAllArticles.vue";

export default {
  name: "App",
  components: {
    // ListOfTodos,
    ListAllArticles,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
