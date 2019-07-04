<template>
<div>
  <h1>使用我的自定义组件</h1>
  <Myinput v-model="data" @input="logData()"></Myinput>
  <div>这是输入框中的值：{{data}}</div>
  <div>
      <div class="scroll">
        <div v-for="(item,index) in scrollData"  :key="index">
          <transition name="fade" v-if="item.type == true">
            <div class="scroll_div">{{item.name}}</div>
          </transition>
        </div>
        <button @click="isShowing=false">隐藏</button>
      </div>
  </div>
</div>
</template>

<script>
import Myinput from './Myinput.vue'
export default {
  data() {
    return {
      data:'斤斤计较',
      list:["滚动条目一","滚动条目二","滚动条目三","滚动条目四","滚动条目五"],
      timer1:Object,
      isShowing: true,
      scrollData:[],
      timer1_index:0
    };
  },
  components:{
    Myinput,
  },
  methods: {
    logData(){
      // console.log(this.data);
    },
    changeInterval(){
      window.clearInterval(this.timer1)
      this.scrollData = []
      this.list.map((item,index)=>{
        this.scrollData.push({name:item,type:true})
      })
      this.list.map((item,index)=>{
        this.scrollData.push({name:item,type:false})
      })
      this.timer1_index = 0
      this.timer1 = setInterval(() => {
        if(this.timer1_index<this.list.length){
          this.scrollData[this.timer1_index].type = false
          this.scrollData[this.timer1_index+this.list.length].type = true
          this.timer1_index++
        }else{
          this.changeInterval()
        }
      }, 1200);
    }
  },
  created(){
    // setTimeout(() => {
    //   this.isShowing = false
    // }, 3000);
  },
  mounted(){
    this.changeInterval()
  },
  beforeDestroy(){
    window.clearInterval(this.timer1)
  }
};
</script>

<style scoped>
.scroll{
  position: absolute;
  background: rgb(22, 255, 53);
  width:200px;
  height: 150px;
  padding: 5px 0px;
  overflow: hidden;
}
.scroll_div{
  height: 25px;
  line-height: 25px;
  background: yellow;
  margin:5px 10px 5px;
  border-radius: 5px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.8s;
  margin-top: 5px;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  margin-top: -25px;
}
</style>
