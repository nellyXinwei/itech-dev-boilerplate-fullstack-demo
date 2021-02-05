<template>
  <div>
    SIMPLE TODO APP

    <div><input type="text" v-model="message" /></div>

    <div v-for="eachTodo in filterTodos" v-bind:key="eachTodo.id">
      <Todo v-bind:eachTodo="eachTodo"></Todo>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  name: "ListOfTodos",

  components: {
    Todo,
  },

  data() {
    return {
      todos: [
        { id: 1, todo: "todo1", author: "author1", isFinished: false },
        { id: 2, todo: "todo2", author: "author2", isFinished: false },
        { id: 3, todo: "todo3", author: "author3", isFinished: false },
      ],
      message: "",
    };
  },

  computed: {
    filterTodos() {
      return this.todos.filter((eachTodo) => {
        return eachTodo.todo.toLowerCase().includes(this.message.toLowerCase());
      });
    },
  },
};
</script>

<style>
</style>