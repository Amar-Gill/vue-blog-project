<template>
<div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <template v-for="blog in filteredBlogs">
    <div :key="blog.id" class="single-blog">
       <router-link :to="'/blog/' + blog.id"> <h2 v-rainbow>{{blog.title }}</h2></router-link>
        <article>{{blog.content | snippet }}</article>
    </div>
    </template>
  
</div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
import firebase from "../firebaseConfig";

const db = firebase.firestore()

export default {
  name: 'showBlogs',
  data() {
    return {
      blogs: [],
      search: ""
    }
  },
  computed: {
      
  },
  filters: {
      toUppercase(value) {return value.toUpperCase()}, // allow for use of 'to-uppercase' in markup
      snippet(value) {return value.slice(0,100) + '...'}
  },
  directives: {
      'rainbow': {
          bind(el, ) {
             el.style.color = "#" + Math.random().toString().slice(2,8);
          }
      },
      'theme': {
           bind(el, binding) {
            if (binding.value === 'wide') {
            el.style.maxWidth = "1200px";
            } else if (binding.value === 'narrow') {
            el.style.maxWidth = "650px"
            }
            if (binding.arg == 'column') {
            el.style.background = "#ddd";
            el.style.padding = "20px";
            }
        }
      }
  },
  methods: {
  
  },
  created() {
    db.collection("blogs")
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            this.blogs.push({
                author: doc.data().author,
                categories: doc.data().categories,
                content: doc.data().content,
                title: doc.data().title,
                id: doc.id
            })
        });
    })
    .catch(error => console.error(error));
  },
  mixins: [searchMixin]
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
