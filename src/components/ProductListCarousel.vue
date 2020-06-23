<template>
  <div class="product-list-carousel mx-auto">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
      <div class="action-btns">
        <span @click="prev" class="carousel-btn prev mr-3">
          <fa-icon icon="caret-square-left" class="icon"></fa-icon>
        </span>

        <span @click="next" class="carousel-btn next">
          <fa-icon icon="caret-square-right" class="icon"></fa-icon>
        </span>
      </div>
    </div>
    <transition-group tag="div" class="product-list" name="product-list">
      <div
        class="product"
        v-for="(product, index) in productsSlice"
        :key="index + 1"
      >
        <img
          :src="require('@/assets/img/comp-product.jpeg')"
          :alt="product.name"
          class="image"
        />
        <div class="info pa-2">
          <p class="name">{{ product.name }}</p>
          <p class="description">{{ product.description }}</p>
        </div>
        <div class="footer pt-3 px-3 pb-6">
          <div class="ratings">
            <fa-icon
              icon="star"
              v-for="(star, index) in 5"
              :key="index"
              class="star"
              :class="{ active: index < product.rating }"
            ></fa-icon>
          </div>
          <div class="price">{{ product.price }}</div>
        </div>
      </div>
    </transition-group>

    <!-- <div class="product-list">
      <div class="product" v-for="(product, index) in productsSlice" :key="index">
        <img :src="require('@/assets/img/comp-product.jpeg')" :alt="product.name" class="image" />
        <div class="info pa-2">
          <p class="name">{{ product.name }}</p>
          <p class="description">{{ product.description }}</p>
        </div>
        <div class="footer pt-3 px-3 pb-6">
          <div class="ratings">
            <fa-icon
              icon="star"
              v-for="(star, index) in 5"
              :key="index"
              class="star"
              :class="{active: index  < product.rating}"
            ></fa-icon>
          </div>
          <div class="price">{{ product.price }}</div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'ProductListCarousel',
  props: {
    products: {
      type: Array,
      default: () => []
    },
    title: String,
    numtoshow: {
      type: Number,
      default: 5
    }
  },
  computed: {
    productsSlice() {
      return this.products.slice(
        this.currentIndex,
        this.currentIndex + this.numtoshow
      )
    }
  },
  data() {
    return {
      currentIndex: 0
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
      color: #fff;

      .icon {
        cursor: pointer;
        filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.11));
      }
    }
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
}
.product {
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.215);
  border-radius: 5px;
  //   width: 300px;
  overflow: hidden;

  .image {
    width: 100%;
  }

  .info {
    text-align: center;
    .name {
      font-weight: bold;
    }

    .description {
      font-size: 0.9em;
      color: rgb(77, 77, 77);
    }
  }

  .footer {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    .ratings .star {
      font-size: 0.7em;
      &.active {
        color: gold;
      }
    }

    .price {
      text-align: right;
    }
  }
}

.product-list-move {
  transition: transform 1s;
}
</style>
