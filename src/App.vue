<template>
  <div id="app">
    <auth-layout v-if="isAuthenticated"></auth-layout>
    <guest-layout v-else></guest-layout>
  </div>
</template>

<script>
  import * as TYPES from './store/types'
  import GuestLayout from './components/layouts/Guest'
  import AuthLayout from './components/layouts/Auth'

  export default {
    name: 'App',
    components: {
      GuestLayout,
      AuthLayout
    },
    computed: {
      isAuthenticated: function () {
        return this.$store.getters[TYPES.GET_LOGIN_STATUS];
      }
    }
  }
</script>

<style>

</style>
