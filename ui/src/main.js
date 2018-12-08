import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'

import VueMarkdown from 'vue-markdown'
import MarkdownEditor from '@/components/common/MarkdownEditor.vue'

Vue.config.productionTip = false

Vue.component('vue-markdown', VueMarkdown)
Vue.component('app-markdown-editor', MarkdownEditor)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
