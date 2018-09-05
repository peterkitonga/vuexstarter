import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/views/guest/Login'
import Register from '../components/views/guest/Register'
import Forgot from '../components/views/guest/Forgot'

import {store} from '../store'
import * as TYPES from '../store/types'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot
    }
  ]
})

export default router
