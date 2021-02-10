import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import "@/assets/css/app.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
