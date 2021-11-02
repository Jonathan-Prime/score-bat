import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/home/Home.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: HomeComponent},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router