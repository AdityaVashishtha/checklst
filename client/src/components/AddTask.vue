<template>
  <div class="add-task">
    <hr class="is-hidden-tablet" />
    <div class="title is-hidden-tablet">Add Task</div>
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
            <input
              v-model="dueDate"
              v-bind:class="errors.name.isInvalid ? 'is-danger' : '' "
              class="input is-medium"
              type="date"
            />
            <span class="icon is-left has-text-danger">
              <i class="fas fa-calendar-alt"></i>
            </span>
          </div>
          <p class="help is-danger" v-if="errors.date.isInvalid">{{errors.date.msg}}</p>
        </div>
        <div class="field">
          <label class="label">Select Label</label>
          <div class="control has-icons-left has-icons-right is-expanded">
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
        },
        date: {
          isInvalid: false,
          msg: "Date is incorrect"
        }
      },
      name: "",
      dueDate: "",
      status: 1,
      label: "other"
    };
  },
  methods: {
    addTask() {
      const newTask = {
        name: this.name,
        status: this.status,
        label: this.label,
        dueDate: this.dueDate
      };
      if (this.validateInput(newTask)) {
        this.errors.name.isInvalid = false;
        this.$emit("add-task", newTask);
        this.name = "";
        this.dueDate = "";
      }
    },
    validateInput(task) {
      if (task.name.trim().length == 0) {
        this.errors.name.isInvalid = true;
        return false;
      }
      this.errors.name.isInvalid = false;
      return true;
    }
  }
};
</script>

<style lang="scss">
ul.list-container {
  box-sizing: border-box;
  height: 100%;
}

.title {
  color: var(--fg-color) !important;
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