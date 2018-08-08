<template>
    <el-col>
    <el-menu
      :default-active="defaultActive"
      :default-openeds="defaultOpen"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#D3DCE6"
      text-color="#333"
      active-text-color="#093BD0">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Element-UI表格</span>
        </template>
            <el-submenu index="1-1">
                <template slot="title">表格基本</template>
                <router-link :to="{name:'table'}"><el-menu-item index="1-1-1">表格分页</el-menu-item></router-link>
                <router-link :to="{name:'table1'}"><el-menu-item index="1-1-2">表格1</el-menu-item></router-link>
                <el-menu-item index="1-1-3">表格2</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>
        <router-link :to="{name:'d3_demo'}">
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">D3流程图</span>
            </el-menu-item>
        </router-link>
        <router-link :to="{name:'echarts_demo'}">
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">Echarts流程图</span>
            </el-menu-item>
        </router-link>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Echarts</span>
        </template>
        <router-link :to="{name:'table1'}"><el-menu-item index="5-1">流程图</el-menu-item></router-link>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
        <el-menu-item index="5-4">选项4</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<script>
export default {
    data(){
        return {
            isCollapse: true
      };
    },
    props:{
        defaultActive:{
            default:'',
            type:String
        },
        defaultOpen:{
            default(){
                return []
            },
            type:Array
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    .el-menu{
        text-align: left;
        min-height: 600px;
    }
    .el-menu .el-menu-item{
        padding-left: 0px;
    }
</style>

