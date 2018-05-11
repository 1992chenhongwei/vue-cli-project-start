<template>
  <div class="panel w">
      <div class="panel-title">
          <p class="list-title">服务管理</p>
          <div class="list-content">
            <router-link :to="{name:''}" class="link">管理一</router-link>
            <router-link :to="{name:''}" class="link">管理二</router-link>
            <router-link :to="{name:''}" class="link">管理三</router-link>
            <router-link :to="{name:''}" class="link">管理四</router-link>
            <router-link :to="{name:''}" class="link">管理五</router-link>
            <router-link :to="{name:''}" class="link">管理六</router-link>
            <router-link :to="{name:''}" class="link">管理七</router-link>
            <router-link :to="{name:''}" class="link">管理八</router-link>
            <router-link :to="{name:''}" class="link">管理九</router-link>
          </div>
      </div>
      <div class="panel-body">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  components:{
  }
}
</script>

<style scoped>
    .w{
        display: flex;
    }
    .w .panel-title{
        width: 16%;
        background: hsl(60, 47%, 96%);
    }
    .w .panel-body{
        width: 84%;
    }
    .list-title{
        text-align: center;
        font-size: 18px;
        color: #4D555D;
        border-bottom: 1px solid rgb(221, 221, 209);
        height: 45px;
        line-height: 45px;
    }
    .list-content{
        width: 100%;
        height: 1000px;
    }
    .link{
         width: 100%;
         padding-left: 28px;
         display: inline-block;
         line-height: 40px;
         height: 40px;
         font-size: 16px;
         box-sizing: border-box;
         border-top: 1px solid hsl(60, 47%, 96%);
         border-bottom: 1px solid hsl(60, 47%, 96%);
     }
     .link:hover{
         border-top: 1px solid rgb(221, 221, 209);
         border-bottom: 1px solid rgb(221, 221, 209);
         background: -webkit-linear-gradient(hsl(60, 47%, 96%), #f0f3ef);
     }
</style>