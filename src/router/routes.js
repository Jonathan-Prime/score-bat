import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/home/Home.vue';
import LeaguesComponent from '../components/leagues/Leagues.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'HomeComponent', component: HomeComponent},
    { path: '/leagues', name: 'LeaguesComponent', component: LeaguesComponent},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router