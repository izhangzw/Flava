import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import record from '@/components/record/record'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/record',
      name: 'record',
      component: record
    }
  ]
})
