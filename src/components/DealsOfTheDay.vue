<template>
  <div class="deals-of-the-day">
    <div class="title pa-3 pl-12">
      <h1>Deals of the Day</h1>
    </div>
    <div class="product-list px-6">
      <div
        class="product"
        v-for="(product, index) in dealProducts"
        :key="index"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'DealsOfTheDay',
  data() {
    return {
      dealProducts: [
        {
          name: 'Apple Macbook Pro 1',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES200,000'
        },
        {
          name: 'Apple Macbook Pro 2',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES200,000'
        },
        {
          name: 'Apple Macbook Pro 3',
          description: 'Some awesome description',
          rating: 3,
          price: 'KES200,000'
        },
        {
          name: 'Apple Macbook Pro 4',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES100,000'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.deals-of-the-day {
  height: 400px;
  background-image: url('../assets/img/bg-deals-of-the-day.png');
  background-size: cover;
  background-position: center;
  color: #fff;
  display: grid;
  grid-template-columns: 300px auto;
  align-items: center;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
}
.product {
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.215);
  border-radius: 5px;
  overflow: hidden;
  color: #444444;

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
</style>
