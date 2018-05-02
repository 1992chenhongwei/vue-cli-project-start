<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <td>尺寸</td>
            <td>价格</td>
            <td>加入</td>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
          </tr>
          <tr v-for="option in item.options" :key="option.price">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button @click="addToBasket(item,option)" class="btn btn-submit btn-outline-success">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
      <div class="col-md-4 col-sm-12" v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in baskets" :key="item.index">
              <td>
                <button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
                <span>{{item.quantity}}</span>
                <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{item.name}}{{item.size}}寸</td>
              <td>{{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价：{{total + 'RMB'}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
    <div v-else>
      {{basketText}}
    </div>
  </div>
</template>

<script>
    export default{
        data(){
          return{
            baskets:[],
            basketText:"购物车没有任何商品",
            // getMenuItems:{}
          }   
        },
        created(){
          // this.$axios.get("/menu.json")
          //   .then(res =>{
          //       this.getMenuItems = res.data
          //   })
          //   .catch(err =>alert(err))

          //将请求下来的数据储存到Vuex中
          this.$axios.get("/menu.json")
            .then(res =>{
                this.$store.commit('setMenuItems' , res.data)
            })
            .catch(err =>alert(err))
        },
        computed:{
          getMenuItems(){
            return this.$store.state.menuItems
          },
          total(){
            let totalCost = 0
            for(let index in this.baskets){
              let individualItem = this.baskets[index]
              totalCost += individualItem.quantity * individualItem.price
            }
            return totalCost
          }
        },
        methods:{
          addToBasket(item,option){
            let basket = {
              name:item.name,
              size:option.size,
              price:option.price,
              quantity:1
            }
            
            // if(this.baskets.length > 0){
              //过滤出新添加商品在baskets中存在的结果
            let result = this.baskets.filter((basket) => {
                return item.name === basket.name && option.price === basket.price && option.size === basket.size 
              })
              // console.log(result)
              if(result.length>0){
                //新添加商品在baskets中存在时，商品数量直接加1
                result[0].quantity++
                // console.log("数目加1")
              }else{
                //新添加商品在baskets中不存在时，商品直接添加到baskets中
                this.baskets.push(basket)
                // console.log("加入baskets")
              }
            // }else{
            //   this.baskets.push(basket)
            // }

          },
          decreaseQuantity(item){
            item.quantity--
            if(item.quantity <= 0){
              this.removeFromBasket(item);
            }
          },
          increaseQuantity(item){
            item.quantity++
          },
          removeFromBasket(item){
            this.baskets.splice(this.baskets.indexOf(item),1)
          }
        }
    }
</script>

<style>
    
</style>