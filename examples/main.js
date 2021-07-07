import Vue from "vue";
import App from "./App.vue";

import DrButton from "../packages/index";

Vue.use(DrButton);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
