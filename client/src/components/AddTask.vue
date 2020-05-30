<template>
  <div class="add-task">
    <div class="task-list">
      <ul class="list-container">
        <div class="field">
          <label class="label">Task Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              v-model="name"
              class="input is-medium"
              v-bind:class="errors.name.isInvalid ? 'is-danger' : '' "
              type="email"
              placeholder="e.g. Take tom for walk"
            />
            <span class="icon is-left has-text-danger">
              <i class="fas fa-sticky-note"></i>
            </span>
          </div>
          <p class="help is-danger" v-if="errors.name.isInvalid">{{errors.name.msg}}</p>
        </div>
        <div class="field">
          <label class="label">Due Date (Optional)</label>
          <div class="control has-icons-left has-icons-right">
            <input v-model="dueDate" class="input is-medium" type="date" />
            <span class="icon is-left has-text-danger">
              <i class="fas fa-calendar-alt"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Select Label</label>
          <div class="control  has-icons-left has-icons-right is-expanded">
            <span class="icon is-left has-text-danger">
              <i class="fas fa-tag"></i>
            </span>
            <div class="select is-fullwidth is-medium">
              <select v-model="label">
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="shopping">Shopping</option>
                <option selected value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <b-button @click="addTask" type="is-danger" size="is-medium" expanded>Add Task</b-button>
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
      errors: {
        name: {
          isInvalid: false,
          msg: "Name is required"
        }
      },
      name: "",
      dueDate: "",
      status: 1,
      label: "other",
      id: 0
    };
  },
  methods: {
    addTask() {
      const newTask = {
        name: this.name,
        status: this.status,
        label: this.label,
        _id: Math.round(Math.random() * 1000),
        dueDate: this.dueDate
      };
      if (newTask.name.trim().length == 0) {
        this.errors.name.isInvalid = true;
      } else {
        this.errors.name.isInvalid = false;
        this.$emit("add-task", newTask);
        this.name = "";
      }
    }
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
  color: var(--fg-color) !important;
}
</style>