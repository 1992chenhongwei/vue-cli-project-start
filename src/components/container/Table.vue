<template>
    <el-container>
        <el-header style="height:40px;">实现表格分页</el-header>
        <el-main>
            <el-row>
                <el-col :span="14"><div>&nbsp;</div></el-col>
                <el-col :span="6">
                    <input class="input-show" v-model="textValue" v-on:keyup.enter="enterSearch"/>
                </el-col>
                <el-col :span="4" style="text-align:center;"><el-button type="success" @click="searchList()">搜索</el-button></el-col>
            </el-row>
            <el-table
            :data="tableData"
            style="width:100%"
            border>
                <el-table-column fixed prop="date" label="日期" width="120"></el-table-column>
                <el-table-column prop="status" label="状态" width="120"></el-table-column>
                <el-table-column prop="province" label="省份" width="120"></el-table-column>
                <el-table-column prop="city" label="市区" width="120"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="zip" label="邮编" width="150"></el-table-column>
            </el-table>
            <el-row>
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 50]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total()">
                </el-pagination>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data(){
        return{
            pageSize:5,
            textValue:'',
            currentPage:1,
            tableData:[],
            tableData1:[],
            tableData3: [{
                date: '2016-05-01',
                status: '已完成',
                province: '北京',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1510 弄',
                zip: 200333
                }, {
                date: '2016-05-02',
                status: '进行中',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1511 弄',
                zip: 200333
                }, {
                date: '2016-05-03',
                status: '失败',
                province: '天津',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1512 弄',
                zip: 200333
                }, {
                date: '2016-05-04',
                status: '进行中',
                province: '深圳',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1513 弄',
                zip: 200333
                }, {
                date: '2016-05-05',
                status: '已完成',
                province: '广州',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1514 弄',
                zip: 200333
                }, {
                date: '2016-05-06',
                status: '已完成',
                province: '重庆',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1515 弄',
                zip: 200333
                }, {
                date: '2016-05-07',
                status: '失败',
                province: '香港',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
                }]
        }
    },
    methods:{
        total(){
            let total = this.tableData1.length
            return total
        },
        handleSizeChange(val) {
            this.tableData = []
            this.pageSize = parseInt(val)
            this.tableData1.map((item,index)=>{
                if(index+1>(this.currentPage-1)*this.pageSize && index+1<this.currentPage*this.pageSize+1){
                    this.tableData.push(item)
                }
            })
        },
        handleCurrentChange(val) {
            this.tableData = []
            this.currentPage = parseInt(val)
            console.log(this.currentPage)
            this.tableData1.map((item,index)=>{
                if(index+1>(this.currentPage-1)*this.pageSize && index+1<this.currentPage*this.pageSize+1){
                    this.tableData.push(item)
                }
            })
        },
        enterSearch(){
            if(event.keyCode==13){
                this.searchList()
                }
        },
        searchList(){
            if(this.textValue == ''){
                this.tableData1 = this.tableData3
                this.tableData = []
                this.tableData1.map((item,index)=>{
                    if(index+1>(this.currentPage-1)*this.pageSize && index+1<this.currentPage*this.pageSize+1){
                        this.tableData.push(item)
                    }
            })
            }else{
                this.doSearch()
            }
        },
        doSearch() {
            let str = this.textValue
            let container = this.tableData3
            var newList = [];
            //新的列表
            var startChar = str.charAt(0);
            //开始字符
            var strLen = str.length;
            //查找符串的长度
            for (var i = 0; i < container.length; i++) {
                var obj = container[i];
                var isMatch = false;
                for (var p in obj) {
                    if (typeof (obj[p]) == "function") {
                        obj[p]();
                    } else {
                        var curItem = "";
                        if (obj[p] != null) {
                            curItem = obj[p];
                        }
                        for (var j = 0; j < curItem.length; j++) {
                            if (curItem.charAt(j) == startChar)
                            {
                                if (curItem.substring(j).substring(0, strLen) == str)
                                {
                                    isMatch = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (isMatch) {
                    newList.push(obj);
                }
            }
            // return newList;
            console.log(newList)
            this.tableData1 = newList
            this.tableData = []
            this.currentPage = 1
            this.tableData1.map((item,index)=>{
                if(index+1>(this.currentPage-1)*this.pageSize && index+1<this.currentPage*this.pageSize+1){
                    this.tableData.push(item)
                }
            })
        }
    },
    created(){
        this.$store.commit("setAside",{defaultActive:'1-1-1',defaultOpen:['1','1-1']})
        this.tableData1 = this.tableData3
        this.tableData1.map((item,index)=>{
                if(index+1>(this.currentPage-1)*this.pageSize && index+1<this.currentPage*this.pageSize+1){
                    this.tableData.push(item)
                }
            })
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
.el-main .el-row{
    margin-top: 10px;
    margin-bottom: 10px;
}
.input-show{
    width: 100%;
    height: 35px;
    line-height: 35px;
    padding: 0 8px;
}
</style>
