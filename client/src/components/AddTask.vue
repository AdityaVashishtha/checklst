<template>
  <div class="add-task">
    <div class="task-list">
      <h3 class="title">Add Task</h3>
      <ul class="list-container">
        <div class="field">
          <label class="label">Task Name</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="email" placeholder="e.g. Take tom for walk" />
            <span class="icon is-left has-text-danger">
              <i class="fas fa-sticky-note"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Due Date (Optional)</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="date" placeholder="e.g. Take tom for walk" />
            <span class="icon is-left has-text-danger">
              <i class="fas fa-calendar-alt"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Select Label</label>
          <div class="control has-icons-left has-icons-right">
            <span class="icon is-left has-text-danger">
              <i class="fas fa-tag"></i>
            </span>
            <b-select placeholder="Select Category" icon="earth" size="is-medium" expanded>
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="buisness">Buisness</option>
              <option value="home">Home</option>
            </b-select>
          </div>
        </div>
        <div class="field">
          <label class="label">Task Description (optional)</label>
          <div class="control has-icons-left has-icons-right">
            <textarea class="input is-medium" placeholder="i.e. Some description"></textarea>
            <span class="icon is-left has-text-danger">
              <i class="fas fa-file-alt"></i>
            </span>
          </div>
        </div>
        <b-button type="is-danger" size="is-medium" expanded>Add Task</b-button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  components: {},
  data() {
    return {
      radioButton: ""
    };
  }
};
</script>

<style lang="scss">
ul.list-container {
  box-sizing: border-box;
  height: 100%;
}

.label {
  display: inline;
  margin: 0px var(--xs-px);
  padding: var(--xs-px);
  padding-left: var(--l-px);
  padding-right: var(--l-px);
  font-size: 0.75em;
  border-radius: var(--l-px);
}
</style>