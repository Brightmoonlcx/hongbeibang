import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index.js"
import axios from "axios"
Vue.prototype.axios = axios

Vue.config.productionTip = false
// console.log(store);
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
