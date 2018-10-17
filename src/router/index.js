import Vue from 'vue'
import Router from 'vue-router'
import Sphero from '@/components/Sphero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sphero',
      component: Sphero
    }
  ]
})
