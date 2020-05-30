<template>
  <div class="task-list">
    <h3 class="title">Up next</h3>
    <ul class="list-container">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";

export default {
  name: "TaskList",
  components: {
    TaskItem
  }
};
</script>

<style lang="scss">
ul.list-container {
  box-sizing: border-box;
  height: 100%;
}
.task-list {
  .title {
    color: var(--fg-color);
  }
}
</style>