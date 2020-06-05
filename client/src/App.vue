<template>
  <div id="app">
    <router-view @authentication="isAuthenticated" />
  </div>
</template>

<script>
import { isLoggedIn } from "./services/auth-service";
export default {
  name: "App",
  data() {
    return {
      authenticated: isLoggedIn()
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "Login" });
    } else {
      this.$router.replace({ name: "Home" });
    }
  },
  methods: {
    isAuthenticated(isLoggedIn, userData) {
      if (isLoggedIn) {
        this.authenticated = true;
        localStorage.setItem("user", JSON.stringify(userData));
        this.$router.replace({ name: "Home" });
      } else {
        this.authenticated = false;
        this.$router.replace({ name: "Login" });
      }
    }
  }
};
</script>

<style lang="scss">
@import url("../node_modules/bulma/css/bulma.min.css");
@import url("./scss/index.scss");
</style>
 