<template>
  <div class="register-box">
    <div class="register-logo">
      <a href="/"><b>Vuex</b>Starter</a>
    </div>

    <div class="register-box-body">
      <p class="register-box-msg">Register a new account</p>

      <form action="#" method="post">
        <div class="form-group has-feedback">
          <input type="text" class="form-control input-lg" placeholder="Full name">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="email" class="form-control input-lg" placeholder="Email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control input-lg" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control input-lg" placeholder="Confirm password">
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
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
    name: "register"
  }
</script>

<style scoped>

</style>
