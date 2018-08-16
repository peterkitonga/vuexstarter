import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import user from './modules/user'
import role from  './modules/role'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth,
    user,
    role
  }
})
