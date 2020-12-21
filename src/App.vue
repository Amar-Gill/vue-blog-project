<template>
  <div id="app">
    <addBlog/>
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
