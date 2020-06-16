<template>
  <div class="featured-products-carousel-container">
    <div class="carousel" ref="carousel">
      <div
        class="product-container pa-12"
        v-for="(product, index) in featuredProducts"
        :key="index"
        :style="`background-image: url(${product1Img})`"
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

      <span @click="prev" class="carousel-btn prev ml-12">
        <fa-icon icon="arrow-circle-left" class="fa-3x"></fa-icon>
      </span>

      <span @click="next" class="carousel-btn next mr-12">
        <fa-icon icon="arrow-circle-right" class="fa-3x"></fa-icon>
      </span>
    </div>
  </div>
</template>

<script>
import product1Img from '../assets/img/product-1.jpg'
export default {
  name: 'FeaturedProductsCarousel',
  data() {
    return {
      product1Img,
      featuredProducts: [
        {
          title: 'Some Product 1',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          title: 'Some Product 2',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          title: 'Some Product 3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          title: 'Some Product 4',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
          title: 'Some Product 5',
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
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
}
.product-container {
  width: 80%;
  //   max-width: 1000px;
  position: absolute;
  height: 450px;
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
    transform: translateX(-180%) scale(0.75);
  }
  &.prev {
    transform: translateX(-140%) scale(0.75);
  }
  &.current {
    transform: translateX(-50%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.397);
  }
  &.next {
    transform: translateX(40%) scale(0.75);
  }
  &.next2 {
    transform: translateX(80%) scale(0.75);
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
  opacity: 0.5;
  .product-info {
    visibility: hidden;
  }
}

.carousel-btn {
  color: #fff;
  z-index: 999;
  cursor: pointer;
  //   position: absolute;

  .prev {
    left: 0%;
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
