<template>
  <div class="columns">
    <div class="column is-two-fifths">
      <div class="is-hidden-mobile task-page">
        <UserWelcomeHeader />
        <SearchBar v-on:search-todo="searchTodos" />
        <HorizontalScrollView v-on:filter-todos="filterTodos" />
        <AddTask v-on:add-task="addTask" />
      </div>
    </div>
    <div class="column is-three-fifths">
      <div class="task-page list">
        <TaskList
          v-on:task-action="handleTaskAction"
          v-on:delete-task="deleteTask"
          v-bind:tasks="mutableTasks"
          v-bind:listTitle="listTitle"
        />
        <div class="float-btn">
          <button class="button is-danger is-large is-rounded">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserWelcomeHeader from "./UserWelcomeHeader.vue";
import SearchBar from "./SearchBar";
import HorizontalScrollView from "./HorizontalScrollView";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

import { escapeRegex } from "../services/util";

export default {
  name: "Task",
  components: {
    UserWelcomeHeader,
    SearchBar,
    HorizontalScrollView,
    TaskList,
    AddTask
  },
  props: ["tasks"],
  data: function() {
    return {
      mutableTasks: this.tasks,
      listTitle: "Up Next"
    };
  },
  methods: {
    searchTodos(event) {
      let searchString = escapeRegex(event.target.value.toLowerCase());
      if (searchString.trim() != "") {
        this.mutableTasks = this.tasks.filter(task =>
          task.name.toLowerCase().match(searchString)
        );
        this.listTitle = "Searching " + searchString + "...";
      } else {
        this.mutableTasks = this.tasks;
        this.listTitle = "Up Next";
      }
    },
    filterTodos(searchString) {
      if (searchString.trim() != "") {
        this.mutableTasks = this.tasks.filter(task =>
          task.label.toLowerCase().match(searchString.toLowerCase())
        );
        this.listTitle = searchString;
      } else {
        this.mutableTasks = this.tasks;
        this.listTitle = "Up Next";
      }
    },
    handleTaskAction(id, status) {
      if (id) {
        this.mutableTasks = this.mutableTasks.map(task => {
          if (task._id == id) {
            task.status = status == 1 ? 0 : 1;
          }
          return task;
        });
        this.mutableTasks.sort((a, b) => b.status - a.status);
      }
    },
    deleteTask(id) {
      this.mutableTasks = this.mutableTasks.filter(task => {
        return task._id != id;
      });
    },
    addTask(task) {
      this.mutableTasks = [...this.mutableTasks,task]
    }
  }
};
</script>

<style lang="scss">
.task-page {
  background-color: var(--bg-color);
  padding: var(--l-px);
  height: calc(100vh-20px);
  max-height: 98vh;
  border-radius: var(--m-px);
}
.task-page.list {
  background-color: var(--bg-color);
  max-height: 98vh;
  border-radius: var(--m-px);
  overflow-y: auto;
}
.float-btn {
  position: fixed;
  bottom: var(--xl-px);
  right: var(--xl-px);
}
.columns {
  padding: 5px;
}
</style>