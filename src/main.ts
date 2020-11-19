import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import global from "@/global";

createApp(App)
  .provide("store", global)
  .use(router)
  .mount("#app");
