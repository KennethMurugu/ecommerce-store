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
  components: { PageHeader, ProductDetailsModal },
  mounted() {
    let body = document.querySelector('body')
    // Set the initial width on mount
    this.$store.state.pageWidth = body.clientWidth
    // Set width onresize
    body.onresize = () => {
      this.$store.state.pageWidth = body.clientWidth
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
}
</style>
