import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Skeleton from "../packages/index";
Vue.use(Skeleton);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
