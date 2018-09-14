<template>
    <el-container>
        <el-header style="height:40px;">实现表格行增删改</el-header>
        <el-main>
            <div class="parent-div">
                <div class="legend-parent">
                    <div class="legend">Ready</div>
                    <div class="legend">Running</div>
                    <div class="legend">Success</div>
                    <div class="legend">Faild</div>
                </div>
            </div>
            <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data(){
        return{
            value1:''
        }
    },
    mounted(){
        var ws = new WebSocket("wss://echo.websocket.org");

        ws.onopen = function(evt) { 
            console.log("Connection open ..."); 
            ws.send("Hello Chenhongwei!");
        };
        
        ws.onmessage = function(evt) {
            console.log( "Received Message: " + evt.data);
            ws.close();
        };
        
        ws.onerror = function(evt) {
            console.log("Connection error.");
        };
        ws.onclose = function(evt) {
            console.log("Connection closed.");
        };
    },
    created(){
        this.$store.commit("setAside",{defaultActive:'1-2',defaultOpen:['1']})
        this.value1 = ('2011-09-10 12:23:34').replace(/-/g,"/")
    }
}
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    line-height: 40px;
    padding: 0px;
}
.el-main{
    min-height: 500px;
    /* padding: 0px; */
}
.parent-div{
    position: relative;
}
.legend-parent{
    position: absolute;
    padding: 10px;
    background-color: #B3C0D1;
    z-index: 4;
    right: 20px;
}
.legend{
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
}
.legend+.legend{
    margin-top: 10px;
}
.legend:nth-child(1){
    background: rgba(0, 91, 252, 0.6);
}
.legend:nth-child(2){
    background: rgba(0, 91, 252, 1);
}
.legend:nth-child(3){
    background: #3EBB44;
}
.legend:nth-child(4){
    background: #E93A3A;
}
</style>
