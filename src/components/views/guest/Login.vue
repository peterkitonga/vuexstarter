<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#"><b>Vuex</b>Starter</a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">Log in to start your session</p>
      <form action="#" method="post">
        <div class="form-group has-feedback">
          <input type="email" class="form-control input-lg" placeholder="Email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control input-lg" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox">
              <label><input type="checkbox"> Remember Me</label>
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
    name: "login"
  }
</script>

<style scoped>

</style>
