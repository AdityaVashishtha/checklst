<template>
  <div class="user-header">
    <div>
      <h1 class="subtitle">Hi,</h1>
      <h2 class="title">User</h2>
    </div>
    <div class="avatar">👩🏻‍🦱</div>
  </div>
</template>

<script>
export default {
  name: "UserWelcomeHeader"
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
}
</style>