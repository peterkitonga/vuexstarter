<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#"><b>Vuex</b>Starter</a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">Enter your email to send the reset link</p>
      <form action="#" method="post">
        <div class="form-group has-feedback">
          <input type="email" class="form-control input-lg" placeholder="Email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
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
    name: "forgot"
  }
</script>

<style scoped>

</style>
