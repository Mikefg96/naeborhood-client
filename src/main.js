import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// https://designrevision.com/docs/shards-vue/getting-started
import ShardsVue from 'shards-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'
Vue.use(ShardsVue);

// https://tachyons.io/
import "tachyons";

// https://www.npmjs.com/package/vue-toasted
import Toasted from 'vue-toasted'; 
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
