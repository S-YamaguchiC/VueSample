// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js' // この行を追加
import axios from 'axios' // この行を追加
import './assets/scss/styles.scss'; // この行を追加

Vue.config.productionTip = false;

Vue.prototype.$axios = axios; // この行を追加

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router, // この行を追加
  components: { App },
  template: '<App/>'
});
