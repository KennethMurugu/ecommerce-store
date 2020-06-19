<template>
  <div class="home">
    <FeaturedProductsCarousel />

    <ProductListCarousel :products="popularProducts" title="Popular Products" />

    <ProductListCarousel
      :products="featuredProducts"
      title="Featured Products"
    />

    <DealsOfTheDay />
  </div>
</template>

<script>
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel'
import ProductListCarousel from '../components/ProductListCarousel'
import DealsOfTheDay from '../components/DealsOfTheDay'

export default {
  name: 'Home',
  components: {
    FeaturedProductsCarousel,
    ProductListCarousel,
    DealsOfTheDay
  },
  data() {
    return {
      popularProducts: [
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
        },
        {
          name: 'Apple Macbook Pro 5',
          description: 'Some awesome description',
          rating: 5,
          price: 'KES80,000'
        },
        {
          name: 'Apple Macbook Pro 6',
          description: 'Some awesome description',
          rating: 3,
          price: 'KES5,000'
        },
        {
          name: 'Apple Macbook Pro 7',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES250,000'
        },
        {
          name: 'Apple Macbook Pro 8',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES120,000'
        }
      ],
      featuredProducts: [
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
        },
        {
          name: 'Apple Macbook Pro 5',
          description: 'Some awesome description',
          rating: 5,
          price: 'KES80,000'
        },
        {
          name: 'Apple Macbook Pro 6',
          description: 'Some awesome description',
          rating: 3,
          price: 'KES5,000'
        },
        {
          name: 'Apple Macbook Pro 7',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES250,000'
        },
        {
          name: 'Apple Macbook Pro 8',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES120,000'
        }
      ]
    }
  }
}
</script>
