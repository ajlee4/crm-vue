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

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use(VuePageTransition);
Vue.filter("date", dateFilter);

const firebaseConfig = {
  apiKey: "AIzaSyDQMvGLoEGxgYo4ugao7CS3L8Ty7nFebDw",
  authDomain: "crm-vue-a696c.firebaseapp.com",
  databaseURL: "https://crm-vue-a696c.firebaseio.com",
  projectId: "crm-vue-a696c",
  storageBucket: "crm-vue-a696c.appspot.com",
  messagingSenderId: "429549032596",
  appId: "1:429549032596:web:9c1599d92e32c3f96c1081",
  measurementId: "G-WS109W5FJX"
};
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      messagePlugin,
      render: h => h(App)
    }).$mount("#app");
  }
});
