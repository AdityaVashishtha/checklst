<template>
  <div class="task-item">
    <div class="content">
      <span class="title" v-bind:class="task.status != 1 ? 'is-done' : ''">{{task.name}}</span>
      <div class="tags">
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">
                <i class="fas fa-tags"></i>
              </span>
              <span class="tag is-info is-light">{{task.label}}</span>
            </div>
          </div>

          <div class="control" v-if="task.dueDate">
            <div class="tags has-addons">
              <span class="tag is-dark">
                <i class="fas fa-calendar-check"></i>
              </span>
              <span class="tag is-primary is-light">{{formatDate(task.dueDate)}}</span>
            </div>
          </div>
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">
                <i class="fas fa-info-circle"></i>
              </span>
              <span class="tag is-light" v-bind:class="task.status ? 'is-warning': 'is-success'">
                <span>{{task.status ? 'In Progress': 'Completed'}}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="options">
      <button
        class="button is-info is-light"
        v-bind:class="task.status == 1 ? 'is-info': 'is-success'"
        @click="$emit('task-action',task._id,task.status)"
      >
        <span class="icon is-small">
          <i class="fas fa-check fa-lg"></i>
        </span>
      </button>
      <button class="button is-danger is-light" @click="$emit('delete-task',task._id)">
        <span class="icon is-small">
          <i class="fas fa-trash-alt"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],
  methods: {
    formatDate(dateStr) {
      let date = new Date(dateStr);
      const dateTimeFormat = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      });
      const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year }
      ] = dateTimeFormat.formatToParts(date);
      return `${day} ${month} ${year}`;
    }
  }
};
</script>

<style lang="scss">
.task-item {
  background-color: var(--bg-color);
  display: grid;
  grid-template-columns: 5fr 1fr;
  position: relative;
  width: 100%;
  border-bottom: 1px solid transparent;
  padding: var(--m-px);
  .title {
    font-size: 1.3em;
    color: var(--fg-color);
  }
  .is-done {
    text-decoration: line-through;
  }
  .content {
    color: var(--fg-color);
    font-weight: bold;
    margin-bottom: 10px;
    .desc {
      display: block;
      font-weight: lighter;
      font-size: 0.75em;
    }
  }
  .options {
    text-align: center;
    justify-self: right;
    button {
      margin-right: var(--xs-px);
      margin-bottom: var(--xs-px);
    }
  }

  .tags {
    margin-top: 5px;
    .field > .tags {
      font-size: 0.5em;
    }
  }
}

.low::after {
  --color: var(--low-color);
  font-size: 1.15em;
  content: "💚";
  bottom: var(--l-px);
  border-radius: 50%;
}

.hig::after {
  --color: var(--hig-color);
  font-size: 1.15em;
  content: "🧡";
  bottom: var(--l-px);
  border-radius: 50%;
}

.mid::after {
  --color: var(--mid-color);
  font-size: 1.15em;
  //position: absolute;
  content: "💛";
  bottom: var(--l-px);
  border-radius: 50%;
}
</style>