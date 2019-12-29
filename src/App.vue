<template>
  <div id="app">
    <h1>The AlpineDev Design System</h1>
    <h3>The Toggle Switch: </h3>
    <ToggleSwitch />
  </div>
</template>

<script>
import ToggleSwitch from "./components/ToggleSwitch.vue";

export default {
  name: "app",
  components: {
    ToggleSwitch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
