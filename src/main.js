// import vuex
import { createApp } from 'vue';
import App from './App.vue';

// import vuex
import store from './store/store.js';

// import font awesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import shopping cart icon
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// add icon to library
library.add(faCartShopping);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon).use(store).mount('#app');
