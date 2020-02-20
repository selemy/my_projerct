import Vue from 'vue'
import App from './App.vue'
import colored from './directives/colored'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(VueRouter)

Vue.filter('uppercase', str => str.toUpperCase())

Vue.directive('colored', colored)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
  store, router
}).$mount('#app')