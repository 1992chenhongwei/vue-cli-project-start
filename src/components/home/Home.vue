<template>
  <div>
    <app-header></app-header>
    <nav-bar></nav-bar>
    <!-- <Hslider/> -->
    <!-- <Footer/> -->
    <!-- <Calendar1/> -->
    <div class="acenter">
      <div>
        <el-button type="primary" :loading="loadbtn" @click="changeBtn()">提交</el-button>
      </div>
      <div>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://localhost:8080/api/hello"
          :on-preview="handlePreview"
          :on-success="onsuccess"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
</div>
  </div>
</template>

<script>
import Header from '../public/Header.vue'
import Navbar from '../public/Nav.vue'
import Hslider from './Hslider.vue'
import Footer from '../public/Footer.vue'
import Calendar1 from '../public/Calendar.vue'
export default {
  data(){
      return{
        loadbtn:false,
        fileList: []
      }
  },
  components:{
      Hslider,
      "app-header":Header,
      "nav-bar":Navbar,
      Footer,
      Calendar1
  },
  methods:{
    changeBtn(){
      // this.loadbtn = true;
      // 增加一句话确认是否可正常提交
      this.$store.commit("startloading");
      setTimeout(()=>{
        // this.loadbtn = false;
        this.$store.state.loading.close();
      },3000)
    },
    submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      onsuccess(response, file, fileList){
        window.alert(response.data.comment_num)

      }
  }
}
</script>

<style scoped>
.acenter{
  width: 800px;
  text-align: center;
  margin: 30px auto;
}
.acenter div{
  margin-top: 30px;
}
</style>

