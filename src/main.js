import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI);
import App from './App.vue'
import router from './router';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

Vue.use(router);
Vue.use(ElementUI);



new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
