<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import HomeComponent from './components/home/Home.vue';
  import Navbar from './components/navbar/Navbar.vue'

  export default {
    name: 'app',
    components: {
      HomeComponent,
      Navbar,
    }
  }
</script>
<style>
  @import './assets/css/styles.css';
</style>