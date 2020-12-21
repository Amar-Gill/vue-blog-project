<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header.vue';

export default {
  name: 'App',
  components: {
    'app-header': header
  }
}
</script>

<style>
body{
    margin: 0;
    font-family:'Courier New', Courier, monospace;
}
</style>
