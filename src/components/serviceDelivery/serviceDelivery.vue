<template>
  <div>
    <app-header></app-header>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '../public/Header.vue'
import Navbar from '../public/Nav.vue'
import Footer from '../public/Footer.vue'
export default {
  data(){
      return{

      }
  },
  components:{
      "app-header":Header,
      "nav-bar":Navbar,
      Footer
  }
}
</script>

<style scoped>

</style>