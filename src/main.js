// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'

import VeeValidate from 'vee-validate'
import VueIziToast from 'vue-izitoast'
import 'izitoast/dist/css/iziToast.min.css'

Vue.use(VeeValidate)
Vue.use(VueIziToast, {position: 'topRight'})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
