// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'


// createApp(App.use(Buefy, {
//   defaultIconPack: 'la'
// })).mount('#app')

Vue.use(Buefy, {
  defaultIconPack: 'la'
})

new Vue({
  render: h => h(App)
}).$mount('#app')