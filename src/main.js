import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n'

import App from './App.vue';
import routes from './router';
import i18nResources from './../config/i18n'

Vue.use(VueRouter);
Vue.use(VueI18n);

const router = new VueRouter({routes});
const i18n = new VueI18n({ locale: 'en', messages: i18nResources});

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});
