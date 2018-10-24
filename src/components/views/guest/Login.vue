<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#"><b>Vuex</b>Starter</a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">Log in to start your session</p>
      <form method="post" @submit.prevent="validate('login-form')" data-vv-scope="login-form">
        <div :class="[errors.has('login-form.email') ? 'has-error' : '', 'form-group has-feedback']">
          <input type="email" class="form-control input-lg" placeholder="Email" name="email" v-model="email" v-validate="'required|email'" autocomplete="off" aria-describedby="email-help-block">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          <span id="email-help-block" class="help-block" v-show="errors.has('login-form.email')">{{ errors.first('login-form.email') }}</span>
        </div>
        <div :class="[errors.has('login-form.password') ? 'has-error' : '', 'form-group has-feedback']">
          <input type="password" class="form-control input-lg" placeholder="Password" name="password" v-model="password" v-validate="'required|min:6'" autocomplete="off" aria-describedby="password-help-block">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          <span id="password-help-block" class="help-block" v-show="errors.has('login-form.password')">{{ errors.first('login-form.password') }}</span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox">
              <label><input type="checkbox" checked> Remember Me</label>
            </div>
          </div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Log In</button>
          </div>
        </div>
      </form>

      <div class="text-center">
        <router-link to="/forgot" class="btn btn-lg btn-link">I forgot my password</router-link><br>
        <router-link to="/register" class="btn btn-lg btn-link">Don't have an account? Register here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data: function () {
      return {
        email: '',
        password: ''
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
