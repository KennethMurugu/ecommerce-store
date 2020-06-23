<template>
  <div class="home">
    <FeaturedProductsCarousel class="mb-12" />

    <DealsOfTheDay class="mb-12" />

    <ProductListCarousel
      :products="popularProducts"
      title="Popular Products"
      class="mb-12"
    />

    <ProductListCarousel
      :products="featuredProducts"
      title="Featured Products"
      class="mb-12"
    />

    <PageFooter />
  </div>
</template>

<script>
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel'
import ProductListCarousel from '../components/ProductListCarousel'
import DealsOfTheDay from '../components/DealsOfTheDay'
import PageFooter from '../components/PageFooter'

export default {
  name: 'Home',
  components: {
    FeaturedProductsCarousel,
    ProductListCarousel,
    DealsOfTheDay,
    PageFooter
  },
  data() {
    return {
      popularProducts: [
        {
          name: 'Apple Macbook Pro 1',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES200,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 2',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES200,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 3',
          description: 'Some awesome description',
          rating: 3,
          price: 'KES200,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 4',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES100,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 5',
          description: 'Some awesome description',
          rating: 5,
          price: 'KES80,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 6',
          description: 'Some awesome description',
          rating: 3,
          price: 'KES5,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 7',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES250,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 8',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES120,000',
          url: 'img/hp-14in.jpg'
        }
      ],
      featuredProducts: [
        {
          name: 'Apple Macbook Pro 1',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES200,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 2',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES200,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 3',
          description: 'Some awesome description',
          rating: 3,
          price: 'KES200,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 4',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES100,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 5',
          description: 'Some awesome description',
          rating: 5,
          price: 'KES80,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 6',
          description: 'Some awesome description',
          rating: 3,
          price: 'KES5,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 7',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES250,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Apple Macbook Pro 8',
          description: 'Some awesome description',
          rating: 4,
          price: 'KES120,000',
          url: 'img/hp-14in.jpg'
        }
      ]
    }
  }
}
</script>
