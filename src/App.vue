<template>
  <div id="app">
    <PageHeader />
    <router-view />
    <ProductDetailsModal v-if="$store.state.showProductDetailsModal" />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import ProductDetailsModal from './components/ProductDetailsModal'
export default {
  components: { PageHeader, ProductDetailsModal }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
}
</style>
