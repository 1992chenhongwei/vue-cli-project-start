<template>
  <div>
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-block btn-success">登陆</button>
          </form>
        </div>
      </div>
    </div>
    <div class="widths">
      <!-- <Slider :items="items" :cname="slider" :options='options' /> -->
      <Slider :items="items" :cname="slider"/>
    </div>
  </div>
</template>

<script>
import slider2 from '../assets/pizza.jpg'
import Slider from './public/slider.vue'
    export default{
        data(){
          return{
            email:'',
            password:'',
            slider:"slider",
            // options:{
              // loop:true,
              // autoplay: {
              //   delay: 2000,
              //   stopOnLastSlide: false,
              //   disableOnInteraction: true,
              // },
              // effect:'cube',
  //             pagination:{
  //               el:".swiper-pagination",
  //               paginationClickable:true,
  //               paginationBulletRender: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + '</span>';
  // }
  //             },
            // },
            items   : [{
                    href    : "home",
                    src     : slider2
                },{
                    href    : "home",
                    src     : slider2
                },{
                    href    : "home",
                    src     : slider2
                },{
                    href    : "home",
                    src     : slider2
                }],
          }
        },
        components:{
          Slider
        },
        methods:{
          onSubmit(){
            this.$axios.get('/user.json').then(res =>{
              const data = res.data;
              const users = [];
              for(let key in data){
                const user = data[key]
                // console.log(user)
                users.push(user)
              }
              // 实现过滤
             const result = users.filter((user) =>{
               return user.email === this.email && user.password === this.password
              })
              console.log(result)

              //判断result的长度是否大于0
            if(result !==null && result.length>0){
              this.$router.push({name:'home'})
            }else{
              alert('您的账号或密码错误')
            }
            }).catch(err=>{
              console.log(err)
            })
          }
        }
    }
</script>

<style>
  .widths{
    width: 1000px;
    display: inline-block;
  }
  .slider{
    width: 700px;
    height: 400px;
    
    margin: 50px auto;
  }
  .slider img{
    width: 100%;
    height: 400px;
  }
</style>