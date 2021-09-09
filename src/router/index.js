import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/home')
    },
    {
      path: '/record',
      name: 'record',
      component: () => import('@/components/record/record')
    }
  ]
})
