import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import firebase from "./firebaseConfig";
import Vuex from 'vuex';

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(Vuex);


const db = firebase.firestore()

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

const store = new Vuex.Store({
  state: {
    firebase,
    db
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
