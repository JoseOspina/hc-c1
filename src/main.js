import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import 'w3-css/4/w3pro.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
