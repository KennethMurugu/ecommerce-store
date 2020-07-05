<template>
  <div class="page-header py-6">
    <div class="app-name-container mr-3">
      <fa-icon icon="bars" class="fa-lg mr-6 side-nav-toggle"></fa-icon>
      <h1 class="app-name my-0">Shopio</h1>
    </div>
    <div class="search-container mx-3 px-6">
      <input
        type="text"
        class="search-input py-4"
        placeholder="Search products, brands..."
      />
      <fa-icon icon="search" class="mx-3"></fa-icon>
    </div>

    <div class="search-container-small">
      <fa-icon icon="search" class="mx-3"></fa-icon>
    </div>

    <div class="action-btns ml-3">
      <p class="my-0 mr-4 btn light flat">Download App</p>
      <p class="my-0 ml-4 btn light flat">Sign in</p>
    </div>

    <div class="action-btns-dropdown">
      <p class="my-0 mr-4 btn light flat">Download App</p>
      <p class="my-0 ml-4 btn light flat">Sign in</p>
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
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.page-header {
  margin-left: 5rem;
  margin-right: 5rem;
}

.app-name-container {
  .app-name {
    font-size: 2em;
    font-weight: bold;
  }
}

.search-container {
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  border-radius: 3px;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }

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

.side-nav-toggle,
.search-container-small,
.action-btns-dropdown {
  display: none;
}

@media screen and (max-width: 1100px) {
  .page-header {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

@media screen and (max-width: 600px) {
  .search-container,
  .action-btns {
    display: none;
  }
  .search-container-small,
  .side-nav-toggle {
    display: block;
  }
}
</style>
