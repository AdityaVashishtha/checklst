<template>
  <div class="task-list">
    <h3 class="title">{{listTitle ? listTitle : 'Todos'}}</h3>
    <ul class="list-container" v-bind:key="task._id" v-for="task in this.tasks">
      <TaskItem
        v-on:task-action="$emit('task-action',task._id, task.status)"
        v-on:delete-task="$emit('delete-task',task._id)"
        v-bind:task="task"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";

export default {
  name: "TaskList",
  components: {
    TaskItem
  },
  props: ["tasks", "listTitle"],
  mounted() {
    this.tasks.sort((a, b) => b.status - a.status);
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