<template>
  <div id="app" style="width: 100%">
    <Navbar></Navbar>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",

  components: {
    Navbar,
  },
};
</script>

<style>
</style>
