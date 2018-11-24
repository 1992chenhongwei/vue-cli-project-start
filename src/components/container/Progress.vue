<template>
    <el-container>
        <el-header style="height:40px;">进度条展示</el-header>
            <el-row style="padding:15px 5px;background:white">
                <el-col :span="6" style="text-align:right;"><label>{{progress.first_name}}：</label></el-col>
                <el-col :span="18">
                    <el-progress style="width:60%" :text-inside="true" :stroke-width="20" :percentage="returnPercent(progress.first_percent)" :color="returnColor(progress.first_percent)"></el-progress>
                </el-col>
            </el-row>
        <el-collapse>
            <el-collapse-item v-for="item in progress.second" :key="item.second_name">
                <template slot="title">
                        <div style="height:100%;">
                            <label style="width:130px;float:left;text-align:right;">{{item.second_name}}：</label>
                            <el-progress style="width:400px;float:left;margin-top:17px;" :percentage="returnPercent(item.second_percent)" :color="returnColor(item.second_percent)"></el-progress>
                        </div>
                </template>
                <div>
                    <label class="third-msg" v-for="item1 in item.third" :key="item1.third_name">
                      <div class="message">
                        <el-progress type="circle" :percentage="returnPercent(item1.third_percent)" :color="returnColor(item.second_percent)"></el-progress>
                        <div style="third-name">{{item1.third_name}}</div>
                      </div>
                    </label>
                    <!-- <el-row>
                        <el-col v-for="(item1,index) in item.third" :key="item1.third_name" :span="6" :offset="index > 0 ? 2 : 0">
                            <el-card style="text-align:center;">
                                <el-progress type="circle" :percentage="returnPercent(item1.third_percent)"></el-progress>
                                <div>
                                    <div style="third-name">{{item1.third_name}}</div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row> -->
                </div>
            </el-collapse-item>
        </el-collapse>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      progress: {
        first_percent: "0%",
        second: [{ second_percent: "0%", third: [{ third_percent: "15%" }] }],
        aaa: [
          { third_percent: "11%" },
          { third_percent: "12%" },
          { third_percent: "13%" },
          { third_percent: "14%" }
        ]
      }
    };
  },
  methods: {
    returnPercent(percent) {
      let percent1 = parseFloat(percent);
      return percent1;
    },
    returnColor(percent) {
      let percent1 = parseFloat(percent);
      if (percent1 < 100) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")"; //所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
      } else {
        return "#3EBB44";
      }
    },
    getData() {
      this.$axios
        .get("/api/progress11")
        .then((res) => {
          this.progress = res.data.response;
          this.$common.promise(res).then((suc)=>{
            let a = suc.data.response
            console.log(a)
          }).catch((err)=>{
            alert("返回数据处理失败："+err)
          })
          // console.log('异步执行成功的打印')
        })
        .catch((err) => {
          console.log(err.response)
        });
    }
  },
  created() {
    this.$store.commit("setAside", {
      defaultActive: "1-3",
      defaultOpen: ["1"]
    });
    this.getData();
    // console.log('异步执行完成后的打印')
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  line-height: 40px;
  padding: 0px;
}
.el-collapse {
  text-align: left;
}
.el-collapse-item div {
  padding-left: 10px;
}
.third-msg {
  width: 18%;
  height: 170px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 10px;
  box-sizing: border-box;
}
.third-msg .message{
  position: absolute;
  margin-top: 15px;
  border-radius: 10px;
  transition: all 0.3s;
  padding: 10px;
  border: 1px solid #d4d4d4;
  box-shadow: 3px 3px 3px #cfcece;
}
.third-msg .message:hover{
  margin-top: 5px;
  box-shadow: 8px 8px 3px #cfcece;
}
</style>
