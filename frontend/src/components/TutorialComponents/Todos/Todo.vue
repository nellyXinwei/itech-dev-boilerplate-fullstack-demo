<template>
  <div>
    <input type="checkbox" v-on:change="markAsFinished" />
    <span v-bind:class="{ isComplete: eachTodo.isFinished }">
      {{ eachTodo.todo }} by
      {{ eachTodo.author }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["eachTodo"],
  methods: {
    markAsFinished() {
      this.eachTodo.isFinished = !this.eachTodo.isFinished;
    },
  },
};
</script>

<style>
.isComplete {
  text-decoration: line-through;
}
</style>