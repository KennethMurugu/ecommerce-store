<template>
  <div class="deals-of-the-day">
    <div class="title pa-3 pl-12">
      <h1>Deals of the Day</h1>
    </div>
    <div class="product-list px-6">
      <ProductCard
        v-for="(product, index) in dealProducts"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'DealsOfTheDay',
  components: { ProductCard },
  data() {
    return {
      dealProducts: [
        {
          name: 'HP 14"',
          description:
            'HP 14in High Performance Laptop (AMD Ryzen 3 3200U 2.6GHz up to 3.5GHz, AMD Radeon Vega 3 Graphics, 4GB DDR4 RAM, 128GB SSD, WiFi, Bluetooth, HDMI, Windows 10(Renewed)',
          rating: 4,
          price: 'KES30,000',
          url: 'img/hp-14in.jpg'
        },
        {
          name: 'Asus Vivobook L203MA',
          description:
            'ASUS VivoBook L203MA Ultra-Thin Laptop, 11.6” HD, Intel Celeron N4000 Processor (up to 2.6 GHz), 4GB RAM, 64GB eMMC, USB-C, Windows 10 in S Mode, One Year of Microsoft Office 365, L203MA-DS04',
          rating: 4,
          price: 'KES27,500',
          url: 'img/asus-vivobook.jpg'
        },
        {
          name: 'Acer Inspire 5',
          description:
            'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver',
          rating: 3,
          price: 'KES35,000',
          url: 'img/acer-inspire.jpg'
        },
        {
          name: 'Apple Macbook Air',
          description:
            'New Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Silver',
          rating: 4,
          price: 'KES90,000',
          url: 'img/macbook-air.jpg'
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
// .product {
//   background-color: #fff;
//   box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.215);
//   border-radius: 5px;
//   overflow: hidden;
//   color: #444444;

//   .image {
//     width: 100%;
//   }

//   .info {
//     text-align: center;

//     .name {
//       font-weight: bold;
//     }

//     .description {
//       font-size: 0.9em;
//       color: rgb(77, 77, 77);
//     }
//   }

//   .footer {
//     display: grid;
//     align-items: center;
//     grid-template-columns: 1fr 1fr;

//     .ratings .star {
//       font-size: 0.7em;
//       &.active {
//         color: gold;
//       }
//     }

//     .price {
//       text-align: right;
//     }
//   }
// }
</style>
