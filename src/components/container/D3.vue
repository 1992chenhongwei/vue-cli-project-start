<template>
<div>
  <h1>使用我的自定义组件</h1>
  <Myinput v-model="data" @input="logData()"></Myinput>
  <div>这是输入框中的值：{{data}}</div>
</div>
</template>

<script>
import Myinput from './Myinput.vue'
export default {
  data() {
    return {
      data:'斤斤计较'
    };
  },
  components:{
    Myinput,
  },
  methods: {
    logData(){
      // console.log(this.data);
    }
  }
};
</script>

<style scoped>

</style>
