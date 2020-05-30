<template>
  <div class="columns">
    <div class="column is-two-fifths">
      <div class="is-hidden-mobile task-page">
        <UserWelcomeHeader />
        <SearchBar />
        <HorizontalScrollView />
        <AddTask />
      </div>
    </div>
    <div class="column is-three-fifths">
      <div class="task-page list">
        <TaskList />
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