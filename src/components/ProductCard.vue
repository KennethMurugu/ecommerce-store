<template>
  <div class="product" @click="openProductDetailsModal">
    <img :src="product.url" :alt="product.name" class="image pa-2" />
    <div class="info py-2 px-6">
      <p class="name">{{ product.name }}</p>
      <p class="description">{{ shortDescription(product.description) }}</p>
    </div>
    <div class="footer pt-3 px-6 pb-6">
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
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    shortDescription(description) {
      if (description.length <= 60) return description
      return description.substring(0, 60) + '...'
    },
    openProductDetailsModal() {
      this.$store.commit('toggleProductDetailsModal', {
        show: true,
        product: this.product
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.215);
  border-radius: 5px;
  overflow: hidden;
  color: #444444;
  display: grid;
  grid-template-rows: 200px 100px auto;
  align-items: flex-start;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    // border-color: #ffdb1142;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.35);
  }

  .image {
    width: 100%;
    max-height: 200px;
    align-self: center;
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
    // align-items: center;
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
</style>
