<template>
  <div class="row">
      <div class="col-sm-12 col-md-8">
          <app-new-pizza></app-new-pizza>
      </div>
      <div class="col-sm-12 col-md-4">
          <h3 class="text-muted my-5">菜单</h3>
          <table class="table">
              <thead class="table table-default">
                  <tr>
                      <th>品种</th>
                      <th>删除</th>
                  </tr>
              </thead>
              <tbody v-for="item in getMenuItems" :key="item.id">
                  <tr>
                      <td>{{item.name}}</td>
                      <td><button @click="deleteItem(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import NewPizza from './newPizza.vue'
    export default{
        data(){
            return{
                // getMenuItems:[]
            }
        },
        components:{
            'app-new-pizza':NewPizza
        },
        computed:{
          getMenuItems:{
              get(){
                  return this.$store.state.menuItems
              },
              set(){

              }
          }
        },
        created(){
            //利用fetch获取数据
            // fetch("https://wd5317018124nhyvwr.wilddogio.com/menu.json")
            // .then(res => {
            //     return res.json()
            // })
            // .then(data => {
            //     let menuArray = []
            //     for(let key in data){
            //         data[key].id = key
            //         menuArray.push(data[key])
            //     }
            //     this.getMenuItems = menuArray
            // })
            // .catch(err =>alert(err))

            //利用axios获取数据
            this.$axios.get("https://wd5317018124nhyvwr.wilddogio.com/menu.json")
            .then(res =>{
                let menuArray = []
                for(let key in res.data){
                    res.data[key].id = key
                    menuArray.push(res.data[key])
                }
                // this.getMenuItems = menuArray

                //利用vuex实现数据同步
                this.$store.commit('setMenuItems',menuArray)
            })
            .catch(err =>alert(err))
        },
        methods:{
            deleteItem(item){

                //利用fetch删除远程数据
                // fetch("https://wd5317018124nhyvwr.wilddogio.com/menu/"+item.id+".json",{
                //     method:"DELETE",
                //     headers:{
                //         "Content-type":"application/json"
                //     }
                // })
                // .then(res =>res.json())
                // .then(data => {
                    //删除成功后重新获取menu.json数据
                //     fetch("https://wd5317018124nhyvwr.wilddogio.com/menu.json")
                //         .then(res => {
                //             return res.json()
                //         })
                //         .then(data => {
                //             let menuArray = []
                //             for(let key in data){
                //                 data[key].id = key
                //                 menuArray.push(data[key])
                //             }
                //             this.getMenuItems = menuArray
                //         }).catch(err => alert(err))
                // })
                // .catch(err => alert(err))

                //利用axios删除远程数据
                this.$axios.delete("https://wd5317018124nhyvwr.wilddogio.com/menu/"+item.id+".json")
                .then(res =>  {this.$store.commit('removeMenuItem',item)})
                .catch(err => alert(err))
            }
        }
        // data(){
        //   return{
        //     name:"Henry"
        //   }
        // },
        // 进入组件之前调用，在next之前是无法使用组件内的data数据的，
        //可以在next中调用vm,vm代表的VueComponent本身
        // beforeRouteEnter:(to,from,next)=>{
        //   next(vm=>{
        //     alert('hello ' + vm.name)
        //   })
        // }
        //离开组件之前调用
        // beforeRouteLeave:(to,from,next)=>{
        //   if(confirm('你确定要离开吗') === true){
        //     next()
        //   }else{
        //     next(false)
        //   }
        // }
    }
</script>

<style>
    
</style>