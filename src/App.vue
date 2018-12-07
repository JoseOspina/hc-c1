<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import 'styles/general.css';
@import 'styles/colors.css';
@import 'styles/animations.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
