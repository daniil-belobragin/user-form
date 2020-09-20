import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate";

Vue.config.devtools = true
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/user-form/' : '/'
}
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
