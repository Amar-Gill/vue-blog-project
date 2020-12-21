<template>
<div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <template v-for="blog in filteredBlogs">
    <div :key="blog.id" class="single-blog">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        <article>{{blog.body | snippet}}</article>
    </div>
    </template>
  
</div>
</template>

<script>
export default {
  name: 'showBlogs',
  data() {
    return {
      blogs: [],
      search: ""
    }
  },
  computed: {
      filteredBlogs() {
          return this.blogs.filter(blog => {
             return blog.title.match(this.search);
          });
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
