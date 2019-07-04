<template>
    <el-container>
        websocket
    </el-container>
</template>

<script>
// import VueSocketio from 'vue-socket.io'
export default {
  data() {
    return {
        ws:''
    };
  },
  methods:{
    createWebsocket(){
      this.ws = new WebSocket("wss://echo.websocket.org");
      // this.ws = new WebSocket("ws://127.0.0.1:5000/test");
      this.ws.onopen = this.wsOpen
      this.ws.onmessage = this.wsMessage
      this.ws.onerror = this.wsError
      this.ws.onclose = this.wsClose
    },
    wsOpen(evt){
         console.log("Connection open ...");
         console.log(evt)
          this.ws.send("陈宏伟");
    },
    wsMessage(evt){
         console.log( "Received Message: " + evt.data);
        //  if(evt.data == 2){
        //      this.ws.close()
        //      return
        //  }
          setTimeout(() => {
            this.ws.send(parseInt(Math.random()*10000));
          }, 2000);
    },
    wsError(evt){
        console.log("Connection error.");
    },
    wsClose(evt){
        console.log("Connection closed.");
    }
  },
  sockets:{ //在此接收又服务器发送过来的数据 ps：注意此处的方法名要与服务器的发送的事件保持一致才能接收到
   connect:function() { 
    console.log('连接成功');
   },
   server_response:function(value) {
    console.log(value);
   }
  },
  mounted() {
    this.$socket.emit('/websocket',JSON.stringify({name:"123"}))
    console.log(this.$socket)
  },
  created() {
      // this.createWebsocket()
  },
  beforeDestroy(){
      // this.ws.close()
  }
};
</script>

<style scoped>

</style>
