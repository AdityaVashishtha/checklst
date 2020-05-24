<template>
  <div class="container">
    <UserWelcomeHeader />
    <SearchBar />
  </div>
</template>

<script>
import UserWelcomeHeader from "./UserWelcomeHeader.vue";
import SearchBar from "./SearchBar";

export default {
  name: "Task",
  components: {
    UserWelcomeHeader,
    SearchBar
  }
};
</script>

<style lang="scss">
.container {
  padding: var(--l-px);
  max-width: 500px;
  height: 100vh;
  border: 1px solid gray;
  border-radius: var(--l-px);
}
</style>