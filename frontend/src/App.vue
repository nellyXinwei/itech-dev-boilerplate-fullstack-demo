<template>
  <div id="app">
    <!-- <ListOfTodos /> -->
    <ListAllArticles />
  </div>
</template>

<script>
// import ListOfTodos from "./components/Todos/ListOfTodos";
import ListAllArticles from "./components/AxiosTutorial/ListAllArticles";

export default {
  name: "App",
  components: {
    // ListOfTodos,
    ListAllArticles,
  },
};
</script>

<style>
</style>
