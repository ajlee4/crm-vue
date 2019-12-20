import Vue from "vue";
import Vuelidate from "vuelidate";
import VuePageTransition from "vue-page-transition";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";
import dateFilter from "@/filters/date.filter.js";
import messagePlugin from "@/utils/plugin.message.js";
Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin)
Vue.use(VuePageTransition);
Vue.filter("date", dateFilter);

new Vue({
  router,
  store,
  messagePlugin,
  render: h => h(App)
}).$mount("#app");
