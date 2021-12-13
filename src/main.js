import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import '@/assets/css/app-style.css'
import {routes} from "@/route/route";

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


