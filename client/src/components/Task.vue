<template>
  <div class="columns">
    <div class="column is-two-fifths">
      <div class="is-hidden-mobile task-page">
        <AddTask />
      </div>
    </div>
    <div class="column is-half">
      <div class="task-page">
        <UserWelcomeHeader />
        <SearchBar />
        <HorizontalScrollView />
        <TaskList />
        <div class="float-btn is-hidden-desktop">
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

export default {
  name: "Task",
  components: {
    UserWelcomeHeader,
    SearchBar,
    HorizontalScrollView,
    TaskList,
    AddTask
  }
};
</script>

<style lang="scss">
.task-page {
  background-color: #fff5f5;
  padding: var(--l-px);
  height: calc(100vh-20px);
  border-radius: var(--l-px);
  margin-left: var(--xl-px);
  margin-top: var(--xl-px);
}
.float-btn {
  position: fixed;
  bottom: var(--xl-px);
  right: var(--xl-px);
}
</style>