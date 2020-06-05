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
        <UserWelcomeHeader class="is-hidden-tablet" />
        <SearchBar class="is-hidden-tablet" v-on:search-todo="searchTodos" />
        <HorizontalScrollView class="is-hidden-tablet" v-on:filter-todos="filterTodos" />
        <TaskList
          v-on:task-action="handleTaskAction"
          v-on:delete-task="deleteTask"
          v-bind:tasks="mutableTasks"
          v-bind:listTitle="listTitle"
        />
        <AddTask class="is-hidden-tablet" v-on:add-task="addTask" />
        <div class="float-btn">
          <button @click="logout" class="button is-danger is-large is-rounded">
            <span class="icon is-small">
              <i class="fas fa-sign-out-alt"></i>
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
import { addTasks } from "../services/task-service";
import { getTasks, deleteTasks, updateTasks } from "../services/task-service";
import { logout } from "../services/auth-service";
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
      tempTasks: [],
      listTitle: "Up Next",
      searchStr: "All"
    };
  },
  methods: {
    searchTodos(event) {
      let searchString = escapeRegex(event.target.value.toLowerCase());
      if (searchString.trim() != "") {
        this.mutableTasks = this.tempTasks.filter(task =>
          task.name.toLowerCase().match(searchString)
        );
        this.listTitle = "Searching " + searchString + "...";
      } else {
        this.mutableTasks = this.tempTasks;
        this.listTitle = "Up Next";
      }
    },
    filterTodos(searchString) {
      this.searchStr = searchString;
      if (searchString.trim() != "" && searchString != "All") {
        this.mutableTasks = this.tempTasks.filter(task =>
          task.label.toLowerCase().match(searchString.toLowerCase())
        );
        this.listTitle = searchString;
      } else {
        this.searchStr = "All";
        this.mutableTasks = this.tempTasks;
        this.listTitle = "Up Next";
      }
    },
    handleTaskAction(id, status) {
      if (id) {
        updateTasks({ _id: id, status: status == 1 ? 0 : 1 })
          .then(resp => {
            if (resp) {
              this.updateTaskList();
            }
          })
          .catch(err => {
            this.$buefy.toast.open("Some error occurred!");
            console.log(err);
          });
      }
    },
    deleteTask(id) {
      deleteTasks(id)
        .then(resp => {
          if (resp) {
            this.updateTaskList();
          }
        })
        .catch(err => {
          this.$buefy.toast.open("Some error occurred!");
          console.log(err);
        });
    },
    addTask(task) {
      addTasks(task)
        .then(resp => {
          if (resp) this.updateTaskList();
        })
        .catch(err => {
          this.$buefy.toast.open("Some error occurred!");
          console.log(err);
        });
    },
    updateTaskList() {
      getTasks()
        .then(response => {
          this.mutableTasks = response.data.filter(task => task.name);
          this.mutableTasks.sort((a, b) => b.status - a.status);
          this.tempTasks = this.mutableTasks;
          this.filterTodos(this.searchStr);
        })
        .catch(err => {
          this.$buefy.toast.open("Some error occurred!");
          console.log(err);
        });
    },
    logout() {
      logout();
      this.$router.replace({ name: "Login" });
    }
  },
  mounted() {
    getTasks()
      .then(response => {
        if (response && response.data) {
          console.log(response.data)
          this.mutableTasks = response.data.filter(task => task.name);
          this.mutableTasks.sort((a, b) => b.status - a.status);
          this.tempTasks = this.mutableTasks;
        }
      })
      .catch(err => {
        this.$buefy.toast.open("Some error occurred!");
        console.log(err);
      });
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
  padding: 10px;
}
</style>