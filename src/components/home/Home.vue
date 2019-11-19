<template>
  <el-container>
    <el-header style="height:40px;">
      <Header/>
    </el-header>
    <el-container>
      <el-aside>
        <Aside :defaultActive="defaultActive" :defaultOpen="defaultOpen"/>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
          <div style="width:600px;height:300px;overflow:hidden;">
            <template  v-for="(temp,index) in newList">
              <transition name="fade" :key="index">
                  <img style="width:600px;height:300px;" :src="temp" alt="" v-if="textActive==index">
              </transition> 
            </template>
          </div>
        </el-main>
        <el-footer style="height:40px;">
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../public/Header.vue";
import Aside from "../public/Aside.vue";
import Footer from "../public/Footer.vue";
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
export default {
  data() {
    return {
      newList:[banner1,banner2,banner3,banner4],
      textActive:0
    };
  },
  components: {
    Header,
    Aside,
    Footer
  },
  computed: {
    defaultActive() {
      return this.$store.state.defaultAside.defaultActive;
    },
    defaultOpen() {
      return this.$store.state.defaultAside.defaultOpen;
    }
  },
  methods: {},
  created() {
    // let arr = [
    //   {name:'张三',Ename:'Tom',num:2},
    //   {name:'李四',Ename:'ToM',num:3},
    //   {name:'王一',Ename:'junn',num:4},
    //   {name:'王二',Ename:'tom',num:5},
    // ]
    // let a = this.$common.filterStr(5 , arr)
    // console.log(a)
    this.interval1 = window.setInterval(() => {
      this.textActive=(this.textActive+1)%this.newList.length
      console.log(this.textActive)
    }, 2000);
  },
  destoryed(){
    window.clearInterval(this.interval1)
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 40px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease 0s;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-to, .fade-leave{
  opacity: 1;
}
</style>

