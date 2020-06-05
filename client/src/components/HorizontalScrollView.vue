<template>
  <div class="horizontal-scroll">
    <div class="full hide-scroll">
      <ul class="hs">
        <li class="item" v-bind:class="theme ? 'y-1-color' : 'd-1-color'" @click="changeMode">
          <i class="fas fa-moon fa-2x"></i>
          <span v-if="theme">Go Light</span>
          <span v-else>Go Dark</span>
        </li>
        <label
          @click="$emit('filter-todos',option.name)"
          v-bind:key="option.name"
          v-for="option in options"
        >
          <li class="item" v-bind:class="option.class">
            <i class="fas fa-2x" v-bind:class="option.icon"></i>
            {{option.name}}
          </li>
        </label>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HorizontalScrollView",
  data: function() {
    return {
      theme: false,
      options: [
        {
          name: "All",
          class: "r-1-color",
          icon: "fa-book"
        },
        {
          name: "Work",
          class: "p-1-color",
          icon: "fa-calendar-check"
        },
        {
          name: "Personal",
          class: "g-1-color",
          icon: "fa-user-clock"
        },
        {
          name: "Shopping",
          class: "b-1-color",
          icon: "fa-shopping-basket"
        },
        {
          name: "Other",
          class: "y-1-color",
          icon: "fa-list"
        }
      ]
    };
  },
  methods: {
    changeMode() {
      let theme = localStorage.getItem("theme");
      this.changeTheme(theme == "true");
      this.$nextTick(() => {
        this.theme = this.isDark();
      });
    },
    changeTheme(theme) {
      let bodyEl = document.getElementsByTagName("body")[0];
      if (theme) {
        bodyEl.setAttribute("class", "light");
      } else {
        bodyEl.setAttribute("class", "dark");
      }
      theme = !theme;
      localStorage.setItem("theme", theme);
    },
    isDark() {
      return localStorage.getItem("theme") == "true";
    }
  },
  mounted() {
    let theme = this.isDark();
    this.theme = theme;
    this.changeTheme(!theme);
    localStorage.setItem("theme", theme);
  }
};
</script>

<style lang="scss" scoped>
.horizontal-scroll {
  --gutter: 20px;
  padding: var(--gutter) 0;
  display: grid;
  grid-gap: var(--gutter) 0;
  grid-template-columns: var(--gutter) 1fr var(--gutter);
  align-content: start;
}

.horizontal-scroll > * {
  grid-column: 2 / -2;
}

.horizontal-scroll > .full {
  grid-column: 1 / -1;
}

.hs {
  display: grid;
  grid-gap: calc(var(--gutter) / 2);
  grid-template-columns: 10px;
  grid-auto-flow: column;
  grid-auto-columns: var(--category-card-size);
  grid-template-rows: minmax(calc(0.75 * var(--category-card-size)), 1fr);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: calc(0.75 * var(--gutter));
  margin-bottom: calc(-0.5 * var(--gutter));
}

.hs:before,
.hs:after {
  content: "";
  width: 10px;
}

/* Hide scrollbar */
.hide-scroll {
  overflow-y: hidden;
  margin-bottom: calc(-0.1 * var(--gutter));
}

ul {
  list-style: none;
  padding: 0;
}

h1,
h2,
h3 {
  margin: 0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll > .hs::-webkit-scrollbar {
  // display: none;
}

/* Hide scrollbar for IE and Edge */
.hide-scroll > .hs {
  // -ms-overflow-style: none;
}

.hs > li,
.item {
  scroll-snap-align: center;
  padding: calc(var(--gutter) / 2 * 1.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: var(--l-px);
  cursor: pointer;
  transition: opacity 250ms ease-in;
  opacity: 1;
}

.hs > li:hover,
.item:hover {
  opacity: 0.85;
}

.item:active {
  opacity: 0.95;
  background-color: var(--fg-color);
}
</style>
