<template>
  <div id="app">
    <showBlogs/>
  </div>
</template>

<script>
// import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default {
  name: 'App',
  components: {
    // addBlog,
    showBlogs
  }
}
</script>

<style>
body{
    margin: 0;
    font-family:'Courier New', Courier, monospace;
}
</style>
