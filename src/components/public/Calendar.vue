<template>
  <div>
      <input type="text" class="date-input" placeholder="选择日期">
      <Calendar class="size"/>
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component'
      // v-on:choseDay="clickDay"
      // v-on:changeMonth="changeDate"
      // v-on:isToday="clickToday"
      // :markDate=arr arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记
      // :markDateMore=arr 多种不同的标记
      // 第一个标记和第二个标记不能同时使用
      // isHideOtherday=false  超过今天也不允许点击
      // :agoDayHide='1514937600' 某个日期以前的不允许点击  时间戳10位
      // :futureDayHide='1525104000' 某个日期以后的不允许点击  时间戳10位
export default {
  components:{
      Calendar
  }
}
</script>

<style scoped>
.date-input{
  margin-left: 100px;
  text-align: center;
  min-width: 200px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  border-radius: 2px;
}
.size{
  width: 350px;
  height: 400px;
  background: red;
}
</style>
