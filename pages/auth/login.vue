<template>
  <section class="container-fluid">
    <div class="auth-login">
      <login-content />
    </div>
  </section>
</template>

<script>
import LoginContent from "~/components/Auth/Login/Content"

export default {
  components: {
    LoginContent,
  },
  fetch({ store, redirect }) {
    if (store.getters["profile/isAuthorized"]) {
      redirect("/profile")
    }
  },
}
</script>

<style lang="scss">
.auth-login {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
