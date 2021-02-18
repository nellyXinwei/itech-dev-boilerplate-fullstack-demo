<template>
  <div style="display: flex; align-items: center; float: left; width: 100%">
    <h1>Axios Tutorial</h1>
    <router-link to="/">Home </router-link> |
    <router-link to="/about">About </router-link>
    <div style="margin: 0 20px"><input type="text" v-model="search" /></div>

    <router-link to="/add-article">Add Article </router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>