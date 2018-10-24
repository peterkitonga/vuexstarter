<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#"><b>Vuex</b>Starter</a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">Enter your email to send the reset link</p>
      <form method="post" @submit.prevent="validate('forgot-form')" data-vv-scope="forgot-form">
        <div :class="[errors.has('forgot-form.email') ? 'has-error' : '', 'form-group has-feedback']">
          <input type="email" class="form-control input-lg" placeholder="Email" name="email" v-model="email" v-validate="'required|email'" autocomplete="off" aria-describedby="email-help-block">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          <span id="email-help-block" class="help-block" v-show="errors.has('forgot-form.email')">{{ errors.first('forgot-form.email') }}</span>
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-flat">Send Reset Email</button>
      </form>

      <div class="text-center">
        <router-link to="/" class="btn btn-lg btn-link">I want to log in</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forgot",
    data: function () {
      return {
        email: '',
      }
    },
    methods: {
      validate: function (scope) {
        this.$validator.validateAll(scope).then(result => {
          if (result) {

          } else {
            this.$toast.error('There are problems with your inputs', 'Error!')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
