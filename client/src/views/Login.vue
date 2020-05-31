<template>
  <div class="container">
    <div class="column is-one-third">
      <div class="title">Welcome to ChkList</div>
      <div class="subtitle">SignIn or Create Account</div>
      <div class="field">
        <label class="label">Username</label>
        <p class="control has-icons-left has-icons-right">
          <input
            v-model="username"
            class="input is-large"
            type="text"
            maxlength="8"
            placeholder="Username"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label">Pin</label>
        <p class="control has-icons-left">
          <input
            v-model="password"
            class="input is-large"
            maxlength="4"
            type="password"
            placeholder="Pin"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button
            @click="perfromLogin()"
            class="button is-primary is-rounded is-large is-expanded is-fullwidth"
          >
            <span class="icon">
              <i class="fas fa-sign-in-alt"></i>
            </span>
            <span>Get In</span>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../services/auth-service";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    perfromLogin() {
      console.log("perfroming logggin");

      if (this.username && this.password) {
        login({ username: this.username, password: this.password })
          .then(res => {
            if (res) {
              this.$emit("authentication", true, res.data);
            }
          })
          .catch(err => {
            console.log(err);
            this.$emit("authentication", false, err);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped >
.column {
  padding: 15px;
  border-radius: var(--l-px);
  background-color: var(--bg-color);
}
.container {
  padding: 5px;
}
.subtitle {
  color: var(--fg-color);
}
</style>