<template>
  <div class="home">
    <Task v-bind:tasks="tasks" />
  </div>
</template>

<script>
import Task from "../components/Task";
import { getTasks } from "../services/task-service";  

export default {
  name: "Home",
  components: {
    Task
  },
  data() {
    return {
      tasks: []
    };
  },
  created() {
    getTasks()
      .then(response => {
        this.tasks = response.data.filter(task => task.name);        
        console.log(this.tasks);
      })
      .catch(err => console.log(err));
  }
};
</script>
