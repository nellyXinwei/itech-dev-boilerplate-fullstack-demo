<template>
  <div>
    <div
      style="
        background-color: white;
        padding: 20px;
        width: 200px;
        height: 200px;
      "
    >
      <!-- <p>{{ eachArticle.thumbnail.formats.thumbnail.url }}</p> -->
      <img
        :src="`http://localhost:1337${eachArticle.thumbnail.formats.thumbnail.url}`"
      />
      <p>{{ eachArticle.name }}</p>
      <p>{{ eachArticle.author.name }}</p>
    </div>
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