<template>
  <div class="user-header">
    <div>
      <h1 class="subtitle">Hi,</h1>
      <h2 class="title">{{username}}</h2>
    </div>
    <div class="avatar">👩🏻‍🦱</div>
  </div>
</template>

<script>
import { getUsername } from "../services/auth-service";
export default {
  name: "UserWelcomeHeader",
  data() {
    return { username: "User" };
  },
  mounted() {
    this.username = getUsername();
  }
};
</script>

<style lang="scss">
.user-header {
  display: grid;
  grid-template-columns: auto var(--avatar-size);

  .avatar {
    width: var(--avatar-size);
    height: var(--avatar-size);
    font-size: 3em;
    text-align: center;
    background-color: var(--accent-color);
    border-radius: 15px;
    justify-items: right;
  }

  .title,
  .subtitle {
    color: var(--fg-color);
  }
}
</style>