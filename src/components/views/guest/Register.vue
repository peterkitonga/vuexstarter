<template>
  <div class="register-box">
    <div class="register-logo">
      <a href="/"><b>Vuex</b>Starter</a>
    </div>

    <div class="register-box-body">
      <p class="register-box-msg">Register a new account</p>

      <form method="post" @submit.prevent="validate('register-form')" data-vv-scope="register-form">
        <div :class="[errors.has('register-form.name') ? 'has-error' : '', 'form-group has-feedback']">
          <input type="text" class="form-control input-lg" placeholder="Full name" name="name" v-model="name" v-validate="'required'" autocomplete="off" aria-describedby="name-help-block">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
          <span id="name-help-block" class="help-block" v-show="errors.has('register-form.name')">{{ errors.first('register-form.name') }}</span>
        </div>
        <div :class="[errors.has('register-form.email') ? 'has-error' : '', 'form-group has-feedback']">
          <input type="email" class="form-control input-lg" placeholder="Email" name="email" v-model="email" v-validate="'required|email'" autocomplete="off" aria-describedby="email-help-block">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          <span id="email-help-block" class="help-block" v-show="errors.has('register-form.email')">{{ errors.first('register-form.email') }}</span>
        </div>
        <div :class="[errors.has('register-form.password') ? 'has-error' : '', 'form-group has-feedback']">
          <input type="password" class="form-control input-lg" placeholder="Password" name="password" v-model="password" v-validate="'required|min:6'" ref="password" autocomplete="off" aria-describedby="password-help-block">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          <span id="password-help-block" class="help-block" v-show="errors.has('register-form.password')">{{ errors.first('register-form.password') }}</span>
        </div>
        <div :class="[errors.has('register-form.password_confirmation') ? 'has-error' : '', 'form-group has-feedback']">
          <input type="password" class="form-control input-lg" placeholder="Confirm Password" name="password_confirmation" v-model="password_confirmation" v-validate="'required|confirmed:password'" autocomplete="off" aria-describedby="password-confirmation-help-block">
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
          <span id="password-confirmation-help-block" class="help-block" v-show="errors.has('register-form.password_confirmation')">{{ errors.first('register-form.password_confirmation') }}</span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox">
              <label>
                <input type="checkbox"> I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="text-center">
        <router-link to="/" class="btn btn-lg btn-link">I already have an account</router-link>
      </div>
    </div>
    <!-- /.form-box -->
  </div>
</template>

<script>
  export default {
    name: "register",
    data: function () {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
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
