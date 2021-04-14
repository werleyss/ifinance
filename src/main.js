import {sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App.vue'
import routes from './router'
import VuexStore from './vuex/store'

//Vue.http.option.root = process.env.SERVER

// new Vue({
//     el: "#app",
//     router,
//     template: '<App/>',
//     components: { App }
// })

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
    routes
})

sync(store, router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
