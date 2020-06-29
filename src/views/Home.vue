<template>
  <div class="home">
    <MainProductsCarousel class="mb-12" />

    <DealsOfTheDay class="mb-12" />

    <ProductListCarousel
      :products="featuredProducts"
      title="Featured Products"
      class="mb-12"
    />

    <ProductListCarousel
      :products="popularProducts"
      title="Popular Products"
      class="mb-12"
    />

    <PageFooter />
  </div>
</template>

<script>
import MainProductsCarousel from '../components/MainProductsCarousel'
import ProductListCarousel from '../components/ProductListCarousel'
import DealsOfTheDay from '../components/DealsOfTheDay'
import PageFooter from '../components/PageFooter'

export default {
  name: 'Home',
  components: {
    MainProductsCarousel,
    ProductListCarousel,
    DealsOfTheDay,
    PageFooter
  },
  data() {
    return {
      popularProducts: [
        {
          name: 'Dell Inspiron i3583',
          description:
            'Dell Inspiron i3583 15.6" HD Touch-Screen Laptop - Intel i5-8265U - 8GB DDR4-256GB SSD - Windows 10 - Wireless-AC - Bluetooth, SD Card Reader, HDMI & USB 3.1 -Waves MaxxAudio Pro- Black',
          rating: 4,
          price: 'KES65,000',
          url: 'img/dell-Inspiron-i358.jpg'
        },
        {
          name: 'Lenovo ThinkPad E595',
          description:
            'Lenovo ThinkPad E595 15.6" Full HD Laptop, AMD Ryzen 5 3500U Quad-Core, Up to 3.70 GHz, 8GB Ram, 256GB SSD, Windows 10 Pro',
          rating: 4,
          price: 'KES55,000',
          url: 'img/lenovo-thinkpad-E595.jpg'
        },
        {
          name: 'Lenovo Ideapad S145',
          description:
            'New Lenovo Ideapad S145 14" Laptop Intel Pentium Gold 5405U Dual-Core CPU, 4GB Memory 128GB SSD Windows 10 Grey (Renewed)',
          rating: 3,
          price: 'KES25,000',
          url: 'img/lenovo-ideapad-s145.jpg'
        },
        {
          name: 'HP Stream 14-Inch',
          description:
            'HP Stream 14-Inch Touchscreen Laptop, AMD Dual-Core A4-9120E Processor, 4 GB SDRAM, 64 GB eMMC, Windows 10 Home in S Mode with Office 365 Personal for One Year (14-ds0120nr, Rose Pink)',
          rating: 4,
          price: 'KES33,000',
          url: 'img/hp-stream-14in.jpg'
        },
        {
          name: 'Acer Swift 3',
          description:
            'Acer Swift 3 Thin & Light Laptop, 14" Full HD IPS, AMD Ryzen 7 4700U Octa-Core Processor with Radeon Graphics, 8GB LPDDR4, 512GB NVMe SSD, WiFi 6, Backlit Keyboard, Fingerprint Reader, SF314-42-R9YN',
          rating: 5,
          price: 'KES65,000',
          url: 'img/acer-swift-3.jpg'
        },
        {
          name: 'Dell XPS 9370',
          description:
            'Dell XPS 9370 13.3in 4K UHD Touchscreen Laptop PC - Intel Core i7-8550U 4.0GHz, 16GB, 512GB SSD, Wi-Fi, Bluetooth, Webcam, Windows 10 Home - Silver (Renewed)',
          rating: 3,
          price: 'KES115,000',
          url: 'img/dell-xps-9370.jpg'
        },
        {
          name: 'Lenovo Yoga C930',
          description:
            'Lenovo Yoga C930 2-in-1 Laptop, 13.9 inches Full HD ( 1920 x 1080 ) Touchscreen, 8th Gen Intel Core i5-8250U, 8GB RAM, 256 GB SSD, Windows 10 (Renewed)',
          rating: 4,
          price: 'KES79,000',
          url: 'img/lenovo-yoga-c930.jpg'
        },
        {
          name: 'Razer Blade 15',
          description:
            'Razer Blade 15 Gaming Laptop: Intel Core i7-9750H 6 Core, NVIDIA GeForce GTX 1660 Ti, 15.6" FHD 144Hz, 16GB RAM, 256GB SSD, CNC Aluminum, Chroma RGB Lighting, Thunderbolt 3, 9th Gen i7-9750H',
          rating: 4,
          price: 'KES140,000',
          url: 'img/razer-blade-15.jpg'
        }
      ],
      featuredProducts: [
        {
          name: 'Lenovo 130S-11IGM',
          description:
            'Lenovo 130S-11IGM 11.6" HD Laptop, Intel Celeron N4000, 4GB RAM, 64GB eMMC, 1-Year Office 365, Windows 10 in S Model - Gray',
          rating: 4,
          price: 'KES35,000',
          url: 'img/lenovo-130s.jpg'
        },
        {
          name: 'Lenovo IdeaPad 3',
          description:
            'Lenovo IdeaPad 3 14" Laptop, 14.0" FHD (1920 x 1080) Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue',
          rating: 4,
          price: 'KES45,000',
          url: 'img/lenovo-ideapad-13.jpg'
        },
        {
          name: 'ASUS VivoBook 15',
          description:
            'SUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34',
          rating: 3,
          price: 'KES40,000',
          url: 'img/asus-vivobook-15.jpg'
        },
        {
          name: 'Acer Predator Helios 300',
          description:
            'Acer Predator Helios 300 Gaming Laptop, Intel Core i7-9750H, GeForce GTX 1660 Ti, 15.6" Full HD 144Hz Display, 3ms Response Time, 16GB DDR4, 512GB PCIe NVMe SSD, RGB Backlit Keyboard, PH315-52-710B',
          rating: 4,
          price: 'KES115,000',
          url: 'img/acer-predator.jpg'
        },
        {
          name: 'LG Gram',
          description:
            'LG Gram Laptop - 15.6" IPS Touchscreen, Intel 10th Gen Core i7-1065G7 CPU, 8GB RAM, 256GB M.2 MVMe SSD, 17 Hours Battery, Thunderbolt 3 - 15Z90N (2020)',
          rating: 5,
          price: 'KES150,000',
          url: 'img/lg-gram.jpg'
        },
        {
          name: 'HP 15.6"',
          description:
            'HP 15.6" HD Intel 10th Gen i3-1005G1 3.4GHz 4GB RAM 128GB SSD Webcam Windows 10 Laptop (1W830UA)',
          rating: 3,
          price: 'KES41,000',
          url: 'img/hp-15.6in.jpg'
        },
        {
          name: 'Dell Inspiron 5570',
          description:
            'Dell Inspiron 5570 15.6in FHD Touchscreen Laptop PC - Intel Core i7-8550U 1.8GHz, 12GB, 1TB HDD, DVDRW, Webcam, Bluetooth, Intel HD 620 Graphics, Windows 10 Home (Renewed)',
          rating: 4,
          price: 'KES250,000',
          url: 'img/dell-inspiron-5570.jpg'
        },
        {
          name: 'Dell Latitude 14',
          description:
            'Dell Latitude 14 7000 7480 Business UltraBook - 14in (1366x768), Intel Core i5-6300U, 256GB SSD, 8GB DDR4, Backlit Keys, Webcam, Windows 10 Professional (Renewed)',
          rating: 4,
          price: 'KES47,000',
          url: 'img/dell-latitude-14.jpg'
        }
      ]
    }
  }
}
</script>
