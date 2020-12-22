<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <ul>
            <template v-for="cat in blog.categories">
                <li :key="cat">{{cat}}</li>
            </template>
        </ul>
    </div>
</template>

<script>
import firebase from "../firebaseConfig";
const db = firebase.firestore();

export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        const docRef = db.collection("blogs").doc(this.id)

        docRef.get().then((doc) => {
        if (doc.exists) {
            this.blog = {
                author: doc.data().author,
                categories: doc.data().categories,
                content: doc.data().content,
                title: doc.data().title,
                id: doc.id
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        })
        .catch(function(error) {
            console.error("Error getting document:", error);
        });
    }
}
</script>

<style scoped>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
}
</style>