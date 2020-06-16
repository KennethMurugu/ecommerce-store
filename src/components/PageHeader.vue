<template>
  <div class="page-header py-6 mb-6">
    <div class="app-name-container mr-3">
      <p class="app-name my-0 mr-6">Shopio</p>
      <fa-icon icon="bars" class="fa-lg"></fa-icon>
    </div>
    <div class="search-container mx-3 px-6">
      <input
        type="text"
        class="search-input py-4"
        placeholder="Search products, brands..."
      />
      <fa-icon icon="search" class="mx-3"></fa-icon>
    </div>

    <div class="action-btns ml-3">
      <p class="my-0 mr-4">Download App</p>
      <p class="my-0 ml-4">Sign in</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
.page-header,
.app-name-container,
.action-btns,
.search-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.page-header {
  margin: 0 5rem;
}

.app-name-container {
  .app-name {
    font-size: 1.5em;
    font-weight: bold;
  }
}

.search-container {
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  .search-input {
    background-color: transparent;
    border: none;
    width: 100%;
    font-family: inherit;

    &:focus,
    &:active {
      border: none;
      outline: none;
    }
  }
}
</style>
