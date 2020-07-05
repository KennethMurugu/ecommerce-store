<template>
  <div class="product-details-modal">
    <div class="modal-body pa-4 ma-3">
      <fa-icon
        class="fa-lg btn-close"
        icon="times"
        @click="closeModal"
      ></fa-icon>
      <div class="product-image-container">
        <img :src="product.url" alt />
      </div>
      <div class="product-info">
        <div class="ratings">
          <fa-icon
            icon="star"
            v-for="(star, index) in 5"
            :key="index"
            class="star"
            :class="{ active: index < product.rating }"
          ></fa-icon>
        </div>
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }}</p>
        <h2>Description</h2>
        <p class="description">{{ product.description }}</p>
        <button class="btn light">
          <fa-icon icon="shopping-cart" class="mr-3" />Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailsModal',
  computed: {
    product() {
      return this.$store.state.productDetailsModal.product
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('toggleProductDetailsModal', { show: false })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-details-modal {
  background-color: rgba(95, 95, 95, 0.589);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  width: 750px;
  height: 95%;
  max-height: 400px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.336);
  display: grid;
  grid-template-columns: 300px auto;
  column-gap: 2rem;
  animation: modalBodyEnter 0.75s ease forwards;
}

.product-image-container {
  align-self: center;
  justify-self: center;

  img {
    width: 100%;
  }
}
.ratings .star {
  font-size: 0.9em;
  &.active {
    color: gold;
  }
}

.btn-close {
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;

  &:hover {
    color: $color-primary;
  }
}

@keyframes modalBodyEnter {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@media screen and (max-width: 700px) {
  .modal-body {
    grid-template-columns: auto;
    max-height: 600px;
  }
}
</style>
