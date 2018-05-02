<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza！</h1>
        <h2>这里有你喜欢的pizza</h2>
        <button class="btn btn-success" @click="goToOther">Let's Order！</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goToOther(){
      // 跳转到上次浏览的页面
      // this.$router.go(-1);

      // 跳转到指定的地址
      // this.$router.replace('/menu');

      // 跳转到指定的路由名字下
      // this.$router.replace({name:'menu'});

      // 通过push进行跳转
      this.$router.push('/register');
      // this.$router.push({name:'register'});
      
    }
  }
}
</script>

<style>
#home{
  background: url('../assets/pizza.jpg') center no-repeat;
  height: 85vh;
  padding: 10%;
}
h1,h2{
  margin: 6%;
}
.background{
  background: #eee;
  opacity: 0.7;
  max-width: 50vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>

