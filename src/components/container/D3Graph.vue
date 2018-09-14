<template>
    <el-container>  
        <el-header style="height:40px;">D3流程图demo</el-header>
        <el-main>
          <div class="d3-graph">
            <svg id="svgCanvas" width=960 height=900></svg>
            <ul id="myMenu">
              <li>•xx</li>
              <li>•xx</li>
            </ul>
          </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
      return {
      
      };
  },
  mounted() {
    var state = [
        { id: '节点1', label: 'V1\n数据同步', class: 'type-suss' },
        { id: 2, label: 'V2\nhive-sql', class: 'type-suss' },
        { id: 3, label: 'V3\nspark-sql', class: 'type-init' },
        { id: 4, label: 'V4\nshell', class: 'type-ready' },
        { id: 5, label: 'V5\npython', class: 'type-fail' },
        { id: 6, label: 'V6\n虚节点', class: 'type-suss' },
        { id: 7, label: 'V7\nspark-sql', class: 'type-suss' },
        { id: 8, label: 'V8\nshell', class: 'type-freeze' },
        { id: 9, label: 'V9\n数据同步', class: 'type-suss' },
        { id: 10, label: 'V10\nshell', class: 'type-queue' },
        { id: 11, label: 'V11\nspark-sql', class: 'type-run' },
        { id: 12, label: 'V12\nspark-sql', class: 'type-suss' },
        { id: 13, label: 'V13\n虚节点', class: 'type-init' },
        { id: 14, label: 'V14\n数据同步', class: 'type-fail' },
        { id: 16, label: 'V16\n数据同步', class: 'type-fail' },
        { id: 17, label: 'V17\n数据同步', class: 'type-fail' },
        { id: 112, label: 'V15\nhive-sql', class: 'type-freeze' },
    ]
    var edg = [
        { start: '节点1', end: 4, option: {} },
        { start: '节点1', end: 8, option: {} },
        { start: '节点1', end: 3, option: {} },
        { start: '节点1', end: 2, option: {} },
        { start: 6, end: 7, option: {} },
        { start: 5, end: 6, option: {} },
        { start: 9, end: 10, option: {} },
        { start: 8, end: 9, option: {} },
        { start: 8, end: 16, option: {} },
        { start: 8, end: 17, option: {} },
        { start: 11, end: 12, option: {} },
        { start: 8, end: 11, option: {} },
        { start: 5, end: 8, option: {} },
        { start: '节点1', end: 5, option: {} },
        { start: 13, end: 14, option: {} },
        { start: 13, end: 6, option: {} },
        { start: 13, end: 17, option: {} },
        { start: '节点1', end: 13, option: {} },
        { start: 112, end: '节点1', option: {} }
    ]
    var statePoint = 1; // 当前选中的点
    this.$diagGraph.init(statePoint, state, edg); //创建关系图
    let _this = this
    var svgCanvas = document.getElementById('svgCanvas'); //绑定事件鼠标点击
    svgCanvas.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target.parentNode.id)
        if (e.target.tagName === 'rect') {
        _this.$diagGraph.changePoint(e.target.parentNode.id);
        }
    })
    var myMenu = document.getElementById("myMenu"); //鼠标右键
    svgCanvas.addEventListener("contextmenu", (event) => { //鼠标右击事件
        event.preventDefault();
        console.log(event.target.tagName)
        if (event.target.tagName === 'rect') {
        myMenu.style.top = event.clientY + "px";
        myMenu.style.left = event.clientX + "px";
        myMenu.style.display = 'block'
        this.myMenuShow = true
        }
    });
    document.addEventListener("click", (event) => {
        myMenu.style.display = 'none'
    });
 },
 methods: {

 },
};
</script>

<style scoped>
    .el-header{
      background-color: #B3C0D1;
      text-align: center;
      line-height: 40px;
      padding: 0px;
    }
    .el-main{
      text-align: left;
      padding: 0px;
    }
</style>
