<template>
  <div>
    <span>
      {{ eachArticle.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["eachArticle"],
  methods: {},
};
</script>

<style scoped>
</style>