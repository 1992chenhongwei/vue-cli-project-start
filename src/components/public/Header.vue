<template>
    <el-row>
        <el-col :span="8"><div class="grid-content bg-purple">图标</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light">学习总结</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">登录</div></el-col>
    </el-row>
</template>

<script>
import Header from "../public/Header.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style scoped>
</style>

