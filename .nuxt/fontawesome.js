import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faStar as freeFasFaStar,
  faChevronDown as freeFasFaChevronDown,
  faArrowDown as freeFasFaArrowDown,
  faArrowRight as freeFasFaArrowRight
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaStar,
  freeFasFaChevronDown,
  freeFasFaArrowDown,
  freeFasFaArrowRight
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
