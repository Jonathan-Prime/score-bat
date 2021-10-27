import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Detail from './components/detail/Detail.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home},
  { path: '/vdlit', component: Detail},
  { path: '/', component: Home}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
