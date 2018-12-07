import Vue from 'vue'
import Router from 'vue-router'

const ContextsView = () => import('@/components/ContextsView.vue')

Vue.use(Router)

export default new Router({
  routes:
  [
    {
      path: '/',
      name: 'ContextsView',
      component: ContextsView
    }
  ]
})
