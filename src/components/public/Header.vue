<template>
  <header class="w">
    <ul class="header-content">
      <li class="header-item">
        <div>
          <img src="../../assets/logo.png" alt="">
        </div>
      </li>
      <li class="header-item">
        <div>
          <p>数据中心</p>
          <p>（上海）</p>
        </div>
      </li>
      <li class="header-item">
        <div>
          <div>
            <span>D</span>
            <span>C</span>
            <span>C</span>
            <span>S</span>
            <span>H</span>
          </div>
          <div><p>主机系统服务化管理平台</p></div>
          <div>
            <span>S</span>
            <span>M</span>
            <span>P</span>
          </div>
        </div>
      </li>
      <li class="header-item">
        <div>
          <router-link :to="{name:''}" class="img-router">
            <img src="../../assets/userlogo.jpg" alt="">
          </router-link>
          <span class="img-router">林倩</span>
          <router-link :to="{name:'home'}" class="img-router">
            <img src="../../assets/home.jpg" alt="">
          </router-link>
          <router-link :to="{name:''}" class="img-router">
            <img src="../../assets/logout.jpg" alt="">
          </router-link>
        </div>
      </li>
    </ul> 
  </header>
</template>

<script>
    export default{
        data(){
          return{
          }
        }
    }
</script>

<style scoped>
    .header-content{
      margin-top: 20px;
      display: flex;
      padding-top: 10px;
      border-bottom: 4px solid rgba(204, 0, 0, 1);
      border-top: 4px solid rgba(204, 0, 0, 1);
    }
    .header-item:nth-child(1){
      width: 14%;
      padding-left: 30px;
    }
    .header-item:nth-child(1) img{
      width: 166px;
      height: 78px;
    }
    .header-item:nth-child(2){
      width: 60px;
      font-family: "楷体_GB2312 Bold", "楷体_GB2312 Regular", 楷体_GB2312;
      padding-top: 23px;
      margin-left: 12px;
      margin-right: 14px;
    }
    .header-item:nth-child(2){
      width: 7%;
      padding-top: 32px;
    }
    .header-item:nth-child(2) p{
      font-family: "楷体_GB2312 Bold", "楷体_GB2312 Regular", 楷体_GB2312;
      font-weight: 700;
      font-style: normal;
      text-align: center;
      font-size: 14px;
      line-height: 18px;
      height: 18px;
    }
    .header-item:nth-child(3){
      width: 58%;
      text-align: center;
    }
    .header-item:nth-child(3) div{
      display: inline-block;
      height: 78px;
      line-height: 78px;
    }
    .header-item:nth-child(3) span{
      display: block;
      font-family: 'Agency FB Normal', 'Agency FB';
      font-weight: 400;
      font-style: normal;
      font-size: 11px;
      color: #996666;
      height: 13px;
      line-height: 13px;
    }
    .header-item:nth-child(3) p{
      font-family: 隶书;
      font-weight: 400;
      font-style: normal;
      font-size: 52px;
      color: rgb(204, 0, 0);
      line-height: 60px;
      height: 60px;
    }
    .header-item:nth-child(4){
      width: 21%;
    }
    .header-item:nth-child(4) img{
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .header-item:nth-child(4) .img-router{
      float: left;
      width: 25%;
      margin-top: 40px;
    }
    .header-item:nth-child(4) .img-router:nth-child(1) img{
      float: right;
    }
    .header-item:nth-child(4) .img-router:nth-child(2){
      margin-top: 43px;
    }
    .header-item:nth-child(4) span{
      top: 42px;
      left: 25px;
      font-family: "华文行楷 Bold", "华文行楷 Regular", 华文行楷;
      font-weight: 700;
      font-style: normal;
      font-size: 16px;
      color: rgb(204, 0, 0);
    }
</style>