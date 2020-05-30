<template>
  <div class="task-item">
    <div class="content">
      <span class="title">Take input from stuff things that are great</span>
      <div class="tags">
        <span class="label b-1-color">
          Label
          <i class="fas fa-tags"></i>
        </span>
        <span class="label y-1-color">In Progress</span>
        <span class="label has-text-grey">22 May 2020</span>
      </div>
    </div>
    <div class="options">
      <div class="dropdown is-right is-hoverable">
        <div class="dropdown-trigger">
          <button
            class="button is-light is-primary is-rounded"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span class="icon is-small">
              <i class="fas fa-ellipsis-h" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a class="dropdown-item">Dropdown item</a>
            <a class="dropdown-item">Other dropdown item</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem"
};
</script>

<style lang="scss">
.task-item {
  background-color: white;
  display: grid;
  grid-template-columns: 5fr 1fr;
  position: relative;
  width: 100%;
  border-radius: var(--l-px);
  margin-bottom: var(--m-px);  
  padding: var(--m-px);
  .title {
    font-size: 1.30em;
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
  }

  .tags {
    margin-top: 15px;
    .label {
      display: inline;
      margin: 0px var(--xs-px);
      padding: var(--xs-px);
      padding-left: var(--l-px);
      padding-right: var(--l-px);
     // background-color: rgba($color: #000, $alpha: 0.15);
      font-size: 0.75em;
      border-radius: var(--l-px);
      //color: var(--fg-color);
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