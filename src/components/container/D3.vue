<template>
    <el-container>  
        <el-header style="height:40px;">D3引入demo</el-header>
        <el-main>
            <svg width="500" height="270">
            <g style="transform: translate(0, 10px)">
            <path :d="line" />
            </g>
            </svg>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
  return {
   data: [99, 71, 78, 25, 36, 92],
   line: '',
  };
 },
 mounted() {
  this.calculatePath();
 },
 methods: {
  getScales() {
   const x = this.$d3.scaleTime().range([0, 430]);
   const y = this.$d3.scaleLinear().range([210, 0]);
   this.$d3.axisLeft().scale(x);
   this.$d3.axisBottom().scale(y);
   x.domain(this.$d3.extent(this.data, (d, i) => i));
   y.domain([0, this.$d3.max(this.data, d => d)]);
   return { x, y };
  },
  calculatePath() {
   const scale = this.getScales();
   const path = this.$d3.line()
    .x((d, i) => scale.x(i))
    .y(d => scale.y(d));
   this.line = path(this.data);
  },
 },
};
</script>

<style scoped>
    .el-header{
        background-color: #B3C0D1;
        /* text-align: left; */
        line-height: 40px;
        padding: 0px;
    }
    .el-main{
        text-align: left;
        padding: 0px;
    }
    svg{
        margin: 25px;
    }
    path{
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;
    }
</style>
