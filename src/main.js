import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/home/Home.vue';
import DetailComponent from './components/detail/Detail.vue';
import LeaguesComponent from './components/leagues/Leagues.vue';
import Select2 from 'v-select2-component'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use('Select2', Select2);

const routes = [
  { path: '/home', component: HomeComponent},
  { path: '/detail', component: DetailComponent},
  { path: '/leagues', component: LeaguesComponent},
  { path: '/', component: HomeComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  components: {
    Select2
  },
  router,
  render: h => h(App)
}).$mount('#app')
