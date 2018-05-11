<template>
    <div class="widths">
        <Slider :items="items" :cname="slider"/>
    </div>
</template>

<script>
import Slider from '../public/Slider.vue'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
export default {
  data(){
      return{
          slider:'slider',
          items:[{
              href:'home',
              src:banner1
          },{
              href:'home',
              src:banner2
          },{
              href:'home',
              src:banner3
          },{
              href:'home',
              src:banner4
          }]
      }
  },
  components:{
      Slider,
  }
}
</script>

<style modle>
.widths{
    width: 100%;
    display: inline-block;
    margin-top: 30px;
  }
  .slider{
    width: 80%;
    margin: 0 auto;
  }
  .slider img{
    width: 100%;
    /* height: 450px; */
  }
</style>
