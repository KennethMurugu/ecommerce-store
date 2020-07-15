<template>
  <div class="featured-products-carousel-container">
    <!-- <div class="carousel" ref="carousel">
      <div
        class="product-container pa-12"
        v-for="(product, index) in featuredProducts"
        :key="index"
        :style="`background-image: url(${productImages[index]})`"
        :class="{
          current: index == 0,
          next: index == 1,
          next2: index == 2,
          prev2: index == 3,
          prev: index == 4
        }"
      >
        <div class="product-info pa-6">
          <h1 class="title">{{ product.title }}</h1>
          <p class="description">{{ product.description }}</p>

          <button class="btn light">
            <fa-icon icon="shopping-cart" class="mr-3"></fa-icon>Buy Now
          </button>
        </div>
      </div>

      <span @click="prev" class="carousel-btn prev">
        <fa-icon icon="caret-square-left" class="fa-3x icon"></fa-icon>
      </span>

      <span @click="next" class="carousel-btn next">
        <fa-icon icon="caret-square-right" class="fa-3x icon"></fa-icon>
      </span>
    </div>-->
    <Flickity
      class="carousel"
      ref="carousel"
      :options="carouselOptions"
      @init="initCarouselOptions"
    >
      <div class="product-info">
        <h1 class="title">{{ currentSlideProduct.title }}</h1>
        <p class="description">{{ currentSlideProduct.description }}</p>

        <button class="btn light">
          <fa-icon icon="shopping-cart" class="mr-3"></fa-icon>Buy Now
        </button>
      </div>
      <div
        v-for="(product, index) in featuredProducts"
        :key="index"
        class="carousel-cell"
        :style="`background-image: url(${productImages[index]})`"
      >
        <!-- <img class="product-img" :src="productImages[index]" alt /> -->
      </div>
    </Flickity>
  </div>
</template>

<script>
import product1Img from '../assets/img/main-product-1.png'
import product2Img from '../assets/img/main-product-2.png'
import product3Img from '../assets/img/main-product-3.png'
import product4Img from '../assets/img/main-product-4.png'
import product5Img from '../assets/img/main-product-5.png'

import Flickity from 'vue-flickity'
export default {
  name: 'MainProductsCarousel',
  components: { Flickity },
  data() {
    return {
      carouselOptions: {
        // autoPlay: true
        setGallerySize: false,
        cellSelector: '.carousel-cell',
        wrapAround: true
      },
      productImages: [
        product1Img,
        product2Img,
        product3Img,
        product4Img,
        product5Img
      ],
      currentProductIndex: 0,
      featuredProducts: [
        {
          title: 'Surface Studio 2  ',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          title: 'iMac Pro',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          title: 'Logitech Mouse',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          title: 'Alienware',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          title: 'Corsair Dominator Platinum RBG',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        }
      ]
    }
  },
  computed: {
    currentSlideProduct() {
      return this.featuredProducts[this.currentProductIndex]
    }
  },
  mounted() {},
  methods: {
    initCarouselOptions() {
      this.$refs.carousel.on('change', index => {
        // console.log('Changed to ' + index)
        this.currentProductIndex = index
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  height: 500px;
  position: relative;
}
.carousel-cell {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.product-img {
  width: 100%;
}
.product-info {
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: rgba(11, 11, 11, 0.4);
  z-index: 9999;
  padding: 1rem;
  color: #fff;
  box-shadow: 0px 8px 15px -8px #0000006e;
  border-radius: 3px;
}
</style>
