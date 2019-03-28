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
            <el-button type="primary" @click="submitRepeat()">重复提交，保留最后一次请求</el-button>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      cancel:null
    };
  },
  methods:{
    submitRepeat(){
      // 如果存在上一次请求，则取消上一次请求
      if(this.cancel){
          this.cancel();
      }

      // 定义CancelToken，它是axios的一个属性，且是一个构造函数
      let CancelToken = this.$axios.CancelToken;

      // 使用axios的get方法获取请求结果，在请求时需要传入cancelToken参数，
      // 实例化一个CancelToken，实例化后会生成一个类似于id的请求令牌，将它赋值给全局的cancel变量。
      this.$axios.get('/request/overtime', {
        cancelToken: new CancelToken((c) => {
            this.cancel = c;
        })
      }).then((res) => {
        // 将请求的结果赋值给personData全局变量，用于展示搜索结果
        console.log(res.data);
        
      }).catch((err)=>{
        // console.log(err);
      })
    },
    websocketMethod(){
      var ws = new WebSocket("wss://echo.websocket.org");
      ws.onopen = function(evt) {
          console.log("Connection open ...");
          ws.send(1);
      };
      ws.onmessage = function(evt) {
          console.log( "Received Message: " + evt);
          setTimeout(() => {
            ws.send(parseInt(evt.data)+1);
          }, 2000);
      };
      ws.onerror = function(evt) {
          console.log("Connection error.");
      };
      ws.onclose = function(evt) {
          console.log("Connection closed.");
      };
    }
  },
  mounted() {
    // this.websocketMethod()
  },
  created() {
    this.$store.commit("setAside", {
      defaultActive: "1-2",
      defaultOpen: ["1"]
    });
    this.value1 = "2011-09-10 12:23:34".replace(/-/g, "/");
    this.$common.setCookie("username", "aaaa", 20);
    this.$common.setCookie("password", "1111", 20);
    // console.log(this.$common.getCookie('password'))
    setTimeout(() => {
      this.$common.delCookie("username");
      // console.log(this.$common.getCookie('username'))
    }, 5000);
    // console.log(document.cookie.indexOf('pass'))
    // console.log(document.cookie.indexOf(';', 15))
    // console.log(this.$common.transferDate(new Date()))
    console.log(this.$common.formatDateTime(new Date()));
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  line-height: 40px;
  padding: 0px;
}
.el-main {
  min-height: 500px;
  /* padding: 0px; */
}
.parent-div {
  position: relative;
}
.legend-parent {
  position: absolute;
  padding: 10px;
  background-color: #b3c0d1;
  z-index: 4;
  right: 20px;
}
.legend {
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
}
.legend + .legend {
  margin-top: 10px;
}
.legend:nth-child(1) {
  background: rgba(0, 91, 252, 0.6);
}
.legend:nth-child(2) {
  background: rgba(0, 91, 252, 1);
}
.legend:nth-child(3) {
  background: #3ebb44;
}
.legend:nth-child(4) {
  background: #e93a3a;
}
</style>
