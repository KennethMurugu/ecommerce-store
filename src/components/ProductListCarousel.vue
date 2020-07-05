<template>
  <div class="product-list-carousel mx-auto px-3">
    <div class="header" v-if="title">
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
    <!-- <transition-group
      tag="div"
      class="product-list"
      name="product-list"
      :style="`grid-template-columns: repeat(${numtoshow}, 1fr);`"
    >
      <ProductCard v-for="(product, index) in productsSlice" :key="index + 1" :product="product" />
    </transition-group>-->
    <div
      class="product-list"
      :style="`grid-template-columns: repeat(${numtoshow}, 1fr);`"
    >
      <ProductCard
        v-for="(product, index) in productsSlice"
        :key="index + 1"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'ProductListCarousel',
  components: { ProductCard },
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
      numtoshow: 5
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
.product-list-carousel {
  max-width: 1200px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .action-btns {
      font-size: 1.5rem;
      color: lighten($color-secondary, 10%);
      .carousel-btn .icon {
        cursor: pointer;
        filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.11));
        transition: all 0.2s ease;

        &:hover {
          color: $color-primary;
        }
      }
    }
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
}

.product-list-move {
  transition: transform 1s;
}
</style>
