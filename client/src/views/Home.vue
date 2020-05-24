<template>
  <div class="home">
    <Task />
  </div>
</template>

<script>
import Task from "../components/Task";
export default {
  name: "Home",
  components: {
    Task
  }
};
</script>

<style lang="scss">
  body {
    background-color: var(--body-color);
  }
</style>