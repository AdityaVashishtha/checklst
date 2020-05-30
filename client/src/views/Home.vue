<template>
  <div class="home">
    <Task v-bind:tasks="tasks" />    
  </div>
</template>

<script>
import Task from "../components/Task";
import { getData } from "../services/task-service";

export default {
  name: "Home",
  components: {
    Task
  },
  data() {
    return {
      tasks: getData()
    }
  },
};
</script>
