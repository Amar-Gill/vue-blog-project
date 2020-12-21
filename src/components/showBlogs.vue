<template>
<div id="show-blogs">
    <h1>All Blog Articles</h1>
    <template v-for="blog in blogs">
    <div :key="blog.id" class="single-blog">{{blog.title}}</div>
    </template>
  
</div>
</template>

<script>
export default {
  name: 'showBlogs',
  data() {
    return {
      blogs: []
    }
  },
  methods: {
  
  },
  created() {
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => {
          this.blogs = data.slice(0,10);
      })
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
