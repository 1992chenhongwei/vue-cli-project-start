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
export default {
  data() {
    return {};
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
    // console.log(this.$d3)
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
</style>

