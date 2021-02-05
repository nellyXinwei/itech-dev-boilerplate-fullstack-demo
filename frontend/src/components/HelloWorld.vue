<template>
  <div>
    <!--HAS TO BE ONLY ONE ROOT ELEMENT-->
    {{ message }}

    <p v-for="eachTodo in todos" v-bind:key="eachTodo.id">
      {{ eachTodo.id }} - {{ eachTodo.todo }} by {{ eachTodo.author }}
    </p>
  </div>
</template>

<script>
// IMPORT THE PACKAGES
// IMPORT DIFFERENT COMPONENTS
export default {
  data() {
    return {
      message: "Hello World",
      todos: [
        { id: 1, todo: "todo1", author: "author1" },
        { id: 2, todo: "todo2", author: "author2" },
        { id: 3, todo: "todo3", author: "author3" },
      ],
    };
  },
};
</script>

<style>
</style>
