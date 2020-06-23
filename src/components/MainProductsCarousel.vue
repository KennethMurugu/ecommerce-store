<template>
  <div class="featured-products-carousel-container">
    <div class="carousel" ref="carousel">
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
        <div class="product-info pa-6 ml-12">
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
    </div>
  </div>
</template>

<script>
import product1Img from '../assets/img/main-product-1.png'
import product2Img from '../assets/img/main-product-2.png'
import product3Img from '../assets/img/main-product-3.png'
import product4Img from '../assets/img/main-product-4.png'
import product5Img from '../assets/img/main-product-5.png'
export default {
  name: 'MainProductsCarousel',
  data() {
    return {
      productImages: [
        product1Img,
        product2Img,
        product3Img,
        product4Img,
        product5Img
      ],
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
  methods: {
    next() {
      let current = this.$refs.carousel.querySelector('.current')
      let next = this.$refs.carousel.querySelector('.next')
      let prev = this.$refs.carousel.querySelector('.prev')
      let next2 = this.$refs.carousel.querySelector('.next2')
      let prev2 = this.$refs.carousel.querySelector('.prev2')

      // document.querySelector('.current').classList.ad

      current.classList.remove('current')
      current.classList.add('prev')

      next.classList.remove('next')
      next.classList.add('current')

      next2.classList.remove('next2')
      next2.classList.add('next')

      prev2.classList.remove('prev2')
      prev2.classList.add('next2')

      prev.classList.remove('prev')
      prev.classList.add('prev2')
    },
    prev() {
      let current = this.$refs.carousel.querySelector('.current')
      let next = this.$refs.carousel.querySelector('.next')
      let prev = this.$refs.carousel.querySelector('.prev')
      let next2 = this.$refs.carousel.querySelector('.next2')
      let prev2 = this.$refs.carousel.querySelector('.prev2')

      // document.querySelector('.current').classList.ad

      current.classList.remove('current')
      current.classList.add('next')

      next.classList.remove('next')
      next.classList.add('next2')

      next2.classList.remove('next2')
      next2.classList.add('prev2')

      prev2.classList.remove('prev2')
      prev2.classList.add('prev')

      prev.classList.remove('prev')
      prev.classList.add('current')
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
}
.product-container {
  width: 80%;
  //   max-width: 1000px;
  position: absolute;
  height: 550px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  transition: all 1s ease;

  &.prev2 {
    transform: translateX(-254%);
  }
  &.prev {
    transform: translateX(-152%);
  }
  &.current {
    transform: translateX(-50%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.397);
  }
  &.next {
    transform: translateX(52%);
  }
  &.next2 {
    transform: translateX(154%);
  }

  &.prev2,
  &.next2 {
    transition: none;
    visibility: hidden;
  }
}

.product-info {
  color: #fff;
  background-color: rgba(107, 107, 107, 0.199);
  backdrop-filter: blur(10px);
  max-width: 300px;
}

.product-container:not(.current) {
  filter: grayscale(85%);
  .product-info {
    visibility: hidden;
  }
}

.carousel-btn {
  color: #fff;
  z-index: 999;
  cursor: pointer;
  position: absolute;
  .icon {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.35));
  }

  &.prev {
    left: 12%;
    top: 50%;
  }
  &.next {
    right: 12%;
    top: 50%;
  }
}

@keyframes enterNext {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(55%);
  }
}
@keyframes enterPrev {
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(-155%);
  }
}
</style>
