import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/guest/Home'

import {store} from '../store'
import * as TYPES from '../store/types'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router
