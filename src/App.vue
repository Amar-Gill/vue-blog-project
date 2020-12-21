<template>
  <div id="app">
    <addBlog msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  name: 'App',
  components: {
    addBlog
  }
}
</script>

<style>
body{
    margin: 0;
    font-family:'Courier New', Courier, monospace;
}
</style>
