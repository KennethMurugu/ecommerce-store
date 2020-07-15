<template>
  <div class="product-list-carousel px-3">
    <!-- <div class="header" v-if="title">
      <h2 class="title">{{ title }}</h2>
      <div class="action-btns" v-if="scrollable">
        <span @click="prev" class="carousel-btn prev mr-3">
          <fa-icon icon="caret-square-left" class="icon fa-lg"></fa-icon>
        </span>

        <span @click="next" class="carousel-btn next">
          <fa-icon icon="caret-square-right" class="icon fa-lg"></fa-icon>
        </span>
      </div>
    </div>
    <div
      class="product-list"
      :style="`grid-template-columns: repeat(${numtoshow}, 1fr);`"
    >
      <ProductCard
        v-for="(product, index) in productsSlice"
        :key="index + 1"
        :product="product"
      />
    </div>-->
    <h2 class="title">{{ title }}</h2>
    <Flickity class="carousel" :options="carouselOptions">
      <ProductCard
        v-for="(product, index) in products"
        :key="index + 1"
        :product="product"
        class="carousel-cell"
      />
    </Flickity>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import Flickity from 'vue-flickity'

export default {
  name: 'ProductListCarousel',
  components: { ProductCard, Flickity },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    title: String
  },
  computed: {
    productsSlice() {
      return this.products.slice(
        this.currentIndex,
        this.currentIndex + this.numtoshow
      )
    },
    pageWidth() {
      return this.$store.state.pageWidth
    }
  },
  watch: {
    pageWidth(newWidth) {
      if (newWidth >= 1000) this.numtoshow = 5
      else if (newWidth > 800) this.numtoshow = 4
      else if (newWidth > 600) this.numtoshow = 3
      else if (newWidth > 350) this.numtoshow = 2
      else this.numtoshow = 1
    }
  },
  data() {
    return {
      currentIndex: 0,
      numtoshow: 5,
      carouselOptions: {
        setGallerySize: false,
        cellSelector: '.carousel-cell',
        // wrapAround: true,
        pageDots: false,
        cellAlign: 'left',
        groupCells: true,
        freeScroll: true
      }
    }
  },
  methods: {
    next() {
      if (this.currentIndex + this.numtoshow >= this.products.length) return
      this.currentIndex++
    },
    prev() {
      if (this.currentIndex <= 0) return
      this.currentIndex--
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 420px;
}
.carousel-cell {
  width: 200px;
  margin: 0 10px;
}
</style>
