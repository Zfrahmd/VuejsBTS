import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

/**
 * Load JWT from Local Storage on Refresh.
 */
let localAuthToken = localStorage.auth_token;
let cookieExists = localAuthToken !== "undefined" && localAuthToken !== null;
if (cookieExists) {
  const auth_token = localStorage.getItem("auth_token");
  const authTokenExists = auth_token !== "undefined" && auth_token !== null;
  if (authTokenExists) {
    store.dispatch("loginUserWithToken", { auth_token });
  }
}
// clear cached jwt tokens if the application gives unauthorized
// errors on logout.
// window.localStorage.clear();
createApp(App).use(store).use(moshaToast).use(router).mount('#app');
