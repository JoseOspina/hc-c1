import Vue from 'vue'
import Router from 'vue-router'

const ContextsView = () => import('@/components/ContextsView.vue')
const ContextMessages  = () => import('@/components/ContextMessages.vue')
const ContextAssets = () => import('@/components/ContextAssets.vue')

Vue.use(Router)

export default new Router({
  routes:
  [
    {
      path: '/',
      name: 'ContextsView',
      component: ContextsView,
      children: [
        {
          path: 'messages',
          name: 'ContextMessages',
          component: ContextMessages
        },
        {
          path: 'assets',
          name: 'assets',
          component: ContextAssets
        }
      ]
    }
  ]
})
