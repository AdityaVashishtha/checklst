<template>
  <div class="search-bar">
    <div class="control has-icons-left has-icons-right">
      <input class="input is-large" type="email" placeholder="Search" />
      <span class="icon is-medium is-left has-text-danger">
        <i class="fas fa-search"></i>
      </span>   
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style lang="scss">
.search-bar {    
    padding-top: var(--xl-px);
    input {
        border-radius: var(--l-px);      
    }
}
</style>