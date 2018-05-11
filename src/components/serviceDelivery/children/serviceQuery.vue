<template>
  <div class="panel w">
      <div class="panel-title">
          <p class="list-title">服务查询</p>
          <div class="list-content">
              <div class="list-child">
                  <a class="link msg">服务化案例零</a>
                  <div class="msg child-list">
                  <router-link :to="{name:'serviceQuery1'}" class="link">服务化案例1.1</router-link>
                  <router-link :to="{name:'serviceQuery2'}" class="link">服务化案例1.2</router-link>
                  </div>
              </div>
              <div class="list-child">
                  <a class="link msg">服务化案例零</a>
                  <div class="msg child-list">
                  <router-link :to="{name:''}" class="link">服务化案例1.1</router-link>
                  <router-link :to="{name:''}" class="link">服务化案例1.2</router-link>
                  </div>
              </div>
              <div class="list-child">
                  <a class="link msg">服务化案例零</a>
                  <div class="msg child-list">
                  <router-link :to="{name:''}" class="link">服务化案例1.1</router-link>
                  <router-link :to="{name:''}" class="link">服务化案例1.2</router-link>
                  </div>
              </div>
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
    .list-child{
        width: 200%;
        display: flex;
        line-height: 40px;
        height: 40px;
    }
    .list-child .msg{
        width: 50%;
    }
    .child-list{
        display: none;
        z-index: 2;
    }
    .list-child:hover .child-list{
        display: block;
    }
    .link{
         background: hsl(60, 47%, 96%);
         width: 100%;
         padding-left: 28px;
         display: inline-block;
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