import Vue from "vue"
import App from "./App.vue"
import "vue-awesome/icons"
import Icon from "vue-awesome/components/Icon"
import { store } from "./store/store"

Vue.component("v-icon", Icon)
new Vue({
  render: h => h(App),
  store
}).$mount("#app")
