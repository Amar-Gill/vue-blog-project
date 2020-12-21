<template>
<div id="add-blog">
  <h2>Add a New Blog Post</h2>
  <form>
    <label>Blog Title:</label>
    <input type="text" v-model.lazy="blog.title" required/>
    <label>Blog Content:</label>
    <textarea v-model.lazy="blog.content"></textarea>
    <div id="checkboxes">
    <label>Rogues</label>
    <input type="checkbox" value="rogues" v-model="blog.categories"/>
    <label>Wizards</label>
    <input type="checkbox" value="wizards" v-model="blog.categories"/>
    <label>Paladins</label>
    <input type="checkbox" value="paladins" v-model="blog.categories"/>
    <label>Hunters</label>
    <input type="checkbox" value="hunters" v-model="blog.categories"/>
    </div>
  </form>
  <div id="preview">
    <h3>Preview Blog</h3>
    <p>Blog Title: {{ blog.title }}</p>
    <p> Blog Content:</p>
    <p>{{ blog.content }}</p>
    <p>Blog Categories:</p>
    <ul>
      <template v-for="category in blog.categories">
      <li :key="category">{{ category }}</li>
      </template>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'addBlog',
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: []
      }
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}

</style>
