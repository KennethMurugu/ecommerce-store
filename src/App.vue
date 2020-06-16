<template>
  <div id="app">
    <PageHeader />
    <router-view />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
export default {
  components: { PageHeader }
}
</script>

<style lang="scss" scoped></style>
