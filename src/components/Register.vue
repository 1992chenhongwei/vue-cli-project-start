<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input type="password" class="form-control" v-model="confirmPassword">
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        data(){
          return{
            email:'',
            password:'',
            confirmPassword:''
          }
        },
        methods:{
          onSubmit(){
            if(this.email === ''){
              alert('用户名不能为空')
            }else if(this.password === ''){
              alert('密码不能为空')
            }else if(this.confirmPassword === ''){
              alert('确认密码不能为空')
            }else if(this.password !==this.confirmPassword){
              alert('两次密码输入不一致')
            }else if(this.password===this.confirmPassword){
              const formData = {
                email:this.email,
                password:this.password,
                confirmPassword:this.confirmPassword
              }
              this.$axios.post('/user.json',formData).then(res =>{
                  this.$router.push({name:'login'})
                }).catch(err =>{
                  alert(err)
                  })
            }
          }
        }
    }
</script>

<style>
    
</style>