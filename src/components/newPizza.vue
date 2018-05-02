<template>
  <form>
      <h3 class="text-mute my-5">添加新的Pizza</h3>
      <div class="form-group row">
          <label for="" class="col-sm-1">品种</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.name">
          </div>
      </div>
      <div class="form-group row">
          <label for="" class="col-sm-1">描述</label>
          <div class="col-sm-11">
              <textarea rows="5" class="form-control" v-model="newPizza.description"/>
          </div>
      </div>
      <p><strong>选项1</strong></p>
      <div class="form-group row">
          <label for="" class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.size1">
          </div>
      </div>
      <div class="form-group row">
          <label for="" class="col-sm-1">价格</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.price1">
          </div>
      </div>
      <p><strong>选项2</strong></p>
      <div class="form-group row">
          <label for="" class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.size2">
          </div>
      </div>
      <div class="form-group row">
          <label for="" class="col-sm-1">价格</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.price2">
          </div>
      </div>
      <div class="form-group row">
          <button @click="addMenuItem()" type="button" class="btn btn-success btn-block">添加</button>
      </div>
  </form>
</template>

<script>
export default {
  data(){
      return{
          newPizza:{}
      }
  },
  methods:{
      addMenuItem(){
          let data = {
            name: this.newPizza.name,
            description: this.newPizza.description,
            options: [{
            size: this.newPizza.size1,
            price: this.newPizza.price1
            },{
            size: this.newPizza.size2,
            price: this.newPizza.price2
            }]
        }

        //axios vue-resource es6中的fetch三种异步技术
        // fetch("https://wd5317018124nhyvwr.wilddogio.com/menu.json",{
        //     method:"POST",
        //     headers:{
        //         "Content-type":"application/json"
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then(res =>res.json())
        // .then(data => this.$router.push({name:'menu'}))
        // .catch(err => alert(err))

        this.$axios.post("https://wd5317018124nhyvwr.wilddogio.com/menu.json",data)
        .then(res => this.$axios.get("https://wd5317018124nhyvwr.wilddogio.com/menu.json")
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
            .catch(err =>alert(err)))
        .catch(err => alert(err))
        
      }
  }
}
</script>
