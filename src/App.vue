<template>
  <div id="app">
    <app-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar';

export default {
  name: 'App',
  components: {
    AppNavbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
