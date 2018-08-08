<template>
    <el-container>
        <el-header style="height:40px;">D3流程图demo</el-header>
        <el-main>

        </el-main>
    </el-container>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    created(){
        this.$store.commit("setAside",{defaultActive:'2',defaultOpen:['2']})
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
