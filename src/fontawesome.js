import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faBars,
  faSearch,
  faShoppingCart,
  faArrowCircleLeft,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'
library.add({
  faBars,
  faSearch,
  faShoppingCart,
  faArrowCircleLeft,
  faArrowCircleRight
})

Vue.component('fa-icon', FontAwesomeIcon)
console.log('Initialized Font Awesome')
