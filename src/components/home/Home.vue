<template>
  <div>
    <app-header></app-header>
    <nav-bar></nav-bar>
    <Hslider/>
    <Footer/>
    <!-- <Calendar1/> -->
    <el-button type="primary" :loading="loadbtn" @click="changeBtn()">提交</el-button>
  </div>
</template>

<script>
import Header from '../public/Header.vue'
import Navbar from '../public/Nav.vue'
import Hslider from './Hslider.vue'
import Footer from '../public/Footer.vue'
import Calendar1 from '../public/Calendar.vue'
export default {
  data(){
      return{
        loadbtn:false,
      }
  },
  components:{
      Hslider,
      "app-header":Header,
      "nav-bar":Navbar,
      Footer,
      Calendar1
  },
  methods:{
    changeBtn(){
      this.loadbtn = true;
      setTimeout(()=>{
        this.loadbtn = false;
      },3000)
    }
  }
}
</script>

<style scoped>

</style>

