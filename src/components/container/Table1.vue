<template>
    <el-container>
        <el-header style="height:40px;">实现表格行增删改</el-header>
        <el-main>表格</el-main>
    </el-container>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.$store.commit("setAside",{defaultActive:'1-1-2',defaultOpen:['1','1-1']})
    }
}
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    /* text-align: left; */
    line-height: 40px;
    padding: 0px;
}
.el-main{
    text-align: left;
    padding: 0px;
}
</style>
