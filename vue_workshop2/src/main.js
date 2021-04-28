import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueTimeline from "@growthbunker/vuetimeline";

Vue.use(VueTimeline);

AOS.init();

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.component('font-awesome-icon', FontAwesomeIcon)
import VueScrollmagic from 'vue-scrollmagic'
Vue.use(VueScrollmagic)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
});

library.add(faFontAwesome)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
