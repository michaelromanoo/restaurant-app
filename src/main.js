// import font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import vuex
import store from "./store/store";

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

library.add(faCartShopping);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
