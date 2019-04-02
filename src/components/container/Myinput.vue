<template>
    <div>
        <input type="text" :class="type" :value="value1" @input="handelChange">
    </div>
</template>

<script>
export default {
  data() {
    return {
        value1: this.value === undefined || this.value === null
            ? ''
            :this.value,
    };
  },
  props:{
      value:[String,Number],
      type:{
          type: String,
          default:'red'
      }
  },
  methods: {
      handelChange(event){
          this.$emit('input',event.target.value)
      }
  }
};
</script>

<style scoped>
.red{
    border: 1px solid gray;
}
.red:hover{
    border: 1px solid red;
}
.blue{
    border: 1px solid gray;
}
.blue:hover{
    border: 1px solid blue;
}
</style>
