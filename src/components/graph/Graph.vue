<template>
    <div style="width:100%;height:100%;">
        <svg class="legendDiv" style="z-index:2;width:100px;height:100%;border:1px solid #eee;background:rgba(250, 247, 247, 1);">
          <g>
            <rect x="20" y="45" width="50" height="30" rx="5" ry="5" fill="white" stroke="black"></rect>
            <rect class="moveReact" x="20" y="45" width="50" height="30" rx="5" ry="5" fill="white" stroke="black"></rect>
            <!-- <circle cx="45" cy="120" r="25" stroke="black" fill="white"></circle>
            <circle class="moveCircle" cx="45" cy="120" r="25" stroke="black" fill="white"></circle> -->
          </g>
        </svg>
        <svg class="nodeArea" @mousemove="changeMouse()" style="width:100%;height:100%;border:1px solid #eee;background:#c6c6c6;">
        </svg>
        <div class="nodeMessage">
          <div>节点id：{{clickNode.nodeName}}</div>
          <div>中心坐标：({{clickNode.cx}},{{clickNode.cy}})</div>
          <div>填充：{{clickNode.fill}}</div>
          <div>节点名：
            <el-input v-model="clickNode.nodeLabel" @change="changeNode()" style="width:120px;"></el-input>
          </div>
          <div>宽　度：
            <el-input v-model="clickNode.width" @change="changeNode()" style="width:120px;"></el-input>
          </div>
          <div>高　度：
            <el-input v-model="clickNode.height" @change="changeNode()" style="width:120px;"></el-input>
          </div>
          <div>
            <a id="downloadJson"><el-button type="success" size="mini" style="margin:10px;" @click="saveJson()">保存</el-button></a>
          </div>
          <div>
            <input type="file" style="width:170px;" name="exportData" @change="fileChange($event)">
          </div>
          <!-- <div>
            <el-button type="success" size="mini" @click="exportGraph()">生成图形</el-button>
          </div> -->
        </div>
        <div id="menuDiv">
          <div class="menu" @click="changeAppendLineState()"><i class="el-icon-menu"></i> 连线</div>
        </div>
    </div>
</template>

<script>
//引入d3库
import * as d3 from 'd3'
export default {
  data() {
    return {
      drageNode:{},
      clickNode:{},
      clickLine:{},
      appendNode:{},
      allNode:[],
      appendLineState:false,
      appendLine:[],
      allLine:[],
      appendNodeState:false,
      initialPosition:{},
      //模板节点拖动
      templateDrage: d3.drag()
            .on("start", this.drageStart)
            .on("end", this.drageEnd)
            .on("drag", this.drageMove),
      //节点拖动
      nodeDrage: d3.drag()
            .on("start", ()=>{})
            .on("end", ()=>{})
            .on("drag", this.nodeMove),
      //直线生成器
      lineGenerator:d3.line()
            .x(function (d) {
                return d[0]
            })
            .y(function (d) {
                return d[1];
            }),
      nodeArea: Object,
      nodeDrawArea: Object,
      defs: Object,
    };
  },
  methods: {
    changeMouse(){
      let element = document.getElementsByClassName('nodeArea')[0]
      if (this.appendLineState == false) {
        element.style.cursor = 'default'
      }else{
        element.style.cursor = 'crosshair'
      }
    },
    changeAppendLineState(){
      this.appendLineState = true
    },
    drageStart(){
      let x =d3.select(".moveReact").attr("x")
      let y =d3.select(".moveReact").attr("y")
      this.initialPosition = JSON.parse(JSON.stringify({x:x,y:y}))
    },
    drageEnd(){
      d3.select(".legendDiv .moveReact")
        .attr("x", this.initialPosition.x)
        .attr("y", this.initialPosition.y)
      this.appendNodeState = false
    },
    drageMove(){
      this.clickNode = {}
      let _this = this
      d3.select(".legendDiv .moveReact")
        .attr("x", d3.event.x-25)
        .attr("y", d3.event.y-15)
        .call(function () {
          //判断拖拽目的区域是否需要添加被拖拽的元素
          if (d3.event.x >= 100) {
            _this.appendNode = {nodeName:'node'+d3.event.x+d3.event.y,nodeLabel:'',cx:d3.event.x,cy:d3.event.y,width:80,height:30,fill:'#409EFF',stroke:'#409EFF'}
            if (_this.appendNodeState == false) {
              _this.allNode.push(_this.appendNode)
              _this.drawNode()
              _this.appendNodeState = true
            }else{
              _this.allNode[_this.allNode.length-1] = _this.appendNode
              _this.nodeArea.selectAll("rect")
                      .remove()
              _this.nodeArea.selectAll("text")
                      .remove()
              _this.drawNode()
            }
          } else {
            if (_this.appendNodeState == true) {
                  _this.allNode.pop()
                  _this.nodeArea.selectAll("text")
                      .remove()
                  _this.nodeArea.selectAll("rect")
                      .remove()
                  _this.drawNode()
                  _this.appendNodeState = false
              }
          }
      });
    },
    nodeMove(){
      this.clickNode = {}
      this.allNode.map((item,index)=>{
        if(item.nodeName == this.drageNode.nodeName){
          item.cx = parseInt(d3.event.x)
          item.cy = parseInt(d3.event.y)
          this.clickNode = item
        }
      })
      // if(d3.event.x>100){
        this.allLine.map((item, index) => {
          if (this.drageNode.nodeName == item.startNode) {
              item.startX = this.drageNode.cx
              item.startY = this.drageNode.cy
          } else if (this.drageNode.nodeName == item.endNode) {
              item.endX = this.drageNode.cx
              item.endY = this.drageNode.cy
          }
        })
        this.changeNode()
        this.nodeClick(this.drageNode)
      // }
    },
    drawNode(){
      //绘制节点
      this.nodeDrawArea.selectAll("rect")
          .data(this.allNode)
          .enter()
          .append("rect")
          .attr("class", (d)=>{
              return d.nodeName;
          })
          .attr("x", (d)=>{
              return d.cx-d.width/2;
          })
          .attr("y", (d)=>{
              return d.cy-d.height/2;
          })
          .attr("width", (d)=>{
              return d.width;
          })
          .attr("height", (d)=>{
              return d.height;
          })
          .attr("fill", (d)=>{
              return d.fill;
          })
          .attr("stroke", (d)=>{
              return d.stroke;
          })
          .attr("rx", '5')
          .on("mousemove",(d)=>{
            this.drageNode = d
          })
          .on("click",(d)=>{
            this.clickNode = d
            if(this.appendLineState == true){
              this.setLineData(d)
            }
            this.nodeClick(d)
          })
          .on("contextmenu",(d)=>{
            // 右键操作
          })
          .call(this.nodeDrage)

      //绘制文本
      this.nodeDrawArea.selectAll("text")
          .data(this.allNode)
          .enter()
          .append("text")
          .attr("class", (d)=>{
              return "text"+d.nodeName;
          })
          .attr("x", (d)=>{
              return d.cx-d.width/2+10;
          })
          .attr("y", (d)=>{
              return d.cy-d.height/2+20;
          })
          .text((d)=>{
            return d.nodeLabel;
          })
          .on("click",(d)=>{
            this.clickNode = d
            if(this.appendLineState == true){
              this.setLineData(d)
            }
            this.nodeClick(d)
          })
          .on("contextmenu",(d)=>{
            // 右键操作
          })
          .call(this.nodeDrage)
    },
    nodeClick(d){
      this.nodeArea.selectAll('rect')
        .attr("stroke","#409EFF")
        .attr("fill","#409EFF")
      this.nodeArea.select('.'+d.nodeName)
        .attr("stroke","#0C70D6")
        .attr("fill","#0C70D6")
    },
    setLineData(d){
      d3.event.preventDefault()
      if(this.appendLine.length == 0){
        this.appendLine.push([d.cx, d.cy, d.nodeName])
      }else if(this.appendLine.length == 1 && d.nodeName != this.appendLine[0][2]){
        this.appendLine.push([d.cx, d.cy, d.nodeName])
        let num = 0
        let confirmPush = true
        //判断this.allLine是否已经存在想添加的路径，存在时confirmPush = false 不可添加
        while (num < this.allLine.length) {
          if(this.appendLine[0][2] == this.allLine[num].startNode 
          && this.appendLine[1][2] == this.allLine[num].endNode){
            confirmPush = false
            break;
          }
          num++
        }
        // 当this.allLine不存在想添加的路径时，执行添加
        if(confirmPush == true){
          this.allLine.push({
                          startX: this.appendLine[0][0],
                          startY: this.appendLine[0][1],
                          endX: this.appendLine[1][0],
                          endY: this.appendLine[1][1],
                          startNode: this.appendLine[0][2],
                          endNode: this.appendLine[1][2]
                      })
        }
        this.drawLine()
        this.nodeDrawArea.selectAll("rect")
            .remove()
        this.nodeDrawArea.selectAll("text")
            .remove()
        this.drawNode()
        this.appendLine = []
        this.appendLineState = false
      }
    },
    drawLine(){
      let _this = this
      this.nodeDrawArea.selectAll("path").remove()
      this.nodeDrawArea.selectAll("path")
      let arrow_path = "M2,2 L10,6 L2,10 L6,6 L2,2";
      //绘制箭头
      this.defs.selectAll("marker").remove()
      this.defs.selectAll("marker")
        .data(this.allLine)
        .enter()
        .append("marker")
        .attr("id", (d)=>{
          // console.log(d)
          return "arrow"+d.startNode+"-"+d.endNode
        })
        .attr("markerUnits", "strokeWidth")
        .attr("markerWidth", "12")
        .attr("markerHeight", "12")
        .attr("viewBox", "0 0 12 12")
        .attr("refX", (d)=>{
          let xLength = Math.abs(d.endX - d.startX)
          let yLength = Math.abs(d.endY - d.startY)
          //反正弦，获取实际弧度
          let radian = Math.atan(yLength/xLength)
          let sinValue = Math.sin(radian)
          let cosValue = Math.cos(radian)
          let height = 0
          let width = 0
          _this.allNode.map((item,index)=>{
            if(item.nodeName == d.endNode){
              height = item.height
              width = item.width
            }
          })
          let radian1 = Math.atan(height/width)
          let sinValue1 = Math.sin(radian1)
          let cosValue1 = Math.cos(radian1)
          // console.log(sinValue)
          let markerPosition = 0
          if(sinValue<=sinValue1){
            // markerPosition = (width/4)/(cosValue*cosValue)+10
            markerPosition = (width/4)/(cosValue)+10
          }else{
            markerPosition = (height/4)/(sinValue)+10
          }
          // return markerPosition
          return markerPosition
        })
        .attr("refY", "6")
        .attr("orient", "auto")
        .append("path")
        .attr("d", arrow_path)
        .attr("fill", "white");

      //绘制路径
      this.nodeDrawArea.selectAll("path").remove()
      this.nodeDrawArea.selectAll("path")
        .data(this.allLine)
        .enter()
        .append('path')
        .attr("class", (d)=>{
              return d.startNode+d.endNode;
          })
        .attr('stroke', 'white')
        .attr('stroke-width', '2')
        .attr('width', '20')
        .attr('fill', 'white')
        //设置路径信息
        .attr('d', function (d) {
            return _this.lineGenerator([
                        [d.startX, d.startY],
                        [d.endX, d.endY]
                    ])
        })
        .attr("marker-end", (d)=>{
          return "url(#arrow"+d.startNode+"-"+d.endNode+")"
        })
        .on("click",(d)=>{
          this.clickLine = d
          //重置路径，箭头样式
          this.nodeDrawArea.selectAll("path")
              .attr('stroke', 'white')
              .attr('fill', 'white')
          this.defs.selectAll("marker")
              .attr("fill", "white")
              .attr('stroke', 'white')
              .select('path')
              .attr('fill', 'white')
          //改变选中路径，箭头样式
          d3.select('.'+d.startNode+d.endNode)
            .attr('stroke', '#F59F85')
          d3.select('#arrow'+d.startNode+'-'+d.endNode)
            .attr('fill', '#F59F85')
            .attr('stroke', '#F59F85')
            .select('path')
            .attr('fill', '#F59F85')
        })
    },
    changeNode(){
      if(this.allNode.length >0){
        this.nodeArea.selectAll('rect').remove()
        this.nodeArea.selectAll('text').remove()
        this.drawLine()
        this.drawNode()
      }
    },
    //保存节点及节点关系数据
    saveJson(){
      let blob = new Blob([JSON.stringify({allNode:this.allNode,allLine:this.allLine})], {
        type: "text/plain;charset=utf-8"
        });
      let a = document.getElementById("downloadJson");
      a.href = window.URL.createObjectURL(blob);
      a.download = "download.json";
    },
    fileChange(event){
      if(event.target.files.length == 1){
        let file = event.target.files[0]
        let msg = ''
        let _this = this
        let reader = new FileReader()
        reader.readAsText(file)
        reader.onload = function(event){
          _this.allNode = JSON.parse(event.target.result).allNode
          _this.allLine = JSON.parse(event.target.result).allLine
          _this.changeNode()
        }
      }
    },
  },
  mounted() {
    //模板图形拖动
    d3.selectAll(".legendDiv rect")
      .call(this.templateDrage)
    //定义图形生成区域
    this.nodeArea = d3.select(".nodeArea")
    this.nodeDrawArea = d3.select(".nodeArea")
                          .append("g")
    let element = document.getElementsByClassName('nodeArea')[0]
    let menuDiv = document.getElementById('menuDiv')
    //点击非节点及路径，重置节点路径样式
    element.addEventListener("click",(e)=>{
        if(e.target.tagName !== 'rect'&& e.target.tagName !== 'path'&& e.target.tagName !== 'text'){
          this.changeNode()
          this.clickNode = {}
          this.clickLine = {}
        }
      })
    document.addEventListener("click",(e)=>{
      menuDiv.style.display = "none"
    })
    //在nodeArea区域右键菜单
    element.addEventListener("contextmenu",(e)=>{
      e.preventDefault()
      menuDiv.style.top = e.pageY + "px"
      menuDiv.style.left = e.pageX + "px"
      menuDiv.style.display = "block"
    })
    //keyup事件监听
    document.onkeydown = (e)=>{
      //当按下esc键时，取消绘制路径
      if(e.keyCode == 27){
        this.appendLineState = false
        this.appendLine = []
      }
      //当按下delete键时，执行删除
      if(e.keyCode == 46){
        //存在被选中的节点 删除被选中的节点,文本,及相关路径
        if(this.clickNode.nodeName){
          this.allNode.map((item,index)=>{
            if(item.nodeName == this.clickNode.nodeName){
              d3.select('.'+this.clickNode.nodeName).remove()
              d3.select('.text'+this.clickNode.nodeName).remove()
              this.allNode.splice(index,1)
            }
          })
          let index = 0
          while (index < this.allLine.length) {
            if(this.allLine[index].startNode == this.clickNode.nodeName || this.allLine[index].endNode == this.clickNode.nodeName){
              d3.select('.'+this.allLine[index].startNode+this.allLine[index].endNode).remove()
              this.allLine.splice(index,1)
            }else{
              index++
            }
          }
        }
        //存在被选中路径 删除被选中的路径
        if(this.clickLine.startNode){
          this.allLine.map((item,index)=>{
            if(item.startNode == this.clickLine.startNode && item.endNode == this.clickLine.endNode){
              d3.select('.'+this.clickLine.startNode+this.clickLine.endNode).remove()
              this.allLine.splice(index,1)
            }
          })
        }
      }
    }
    //定义箭头
    this.defs = this.nodeArea.append("defs")
    //增加缩放功能
    let inner = this.nodeArea.select('g')
    let zoom = d3.zoom().on('zoom', function () { // 放大
        inner.attr('transform', d3.event.transform)
    })
    this.nodeArea.call(zoom)
  },
  created() {
    
  },
  beforeDestroy(){
    document.onkeyup = null
  }
};
</script>

<style scoped>
.nodeArea, .legendDiv {
  position: absolute;
  margin: -2px;
  padding: 0px;
}
.nodeMessage{
  position: absolute;
  padding-left: 5px;
  padding-top: 5px;
  width: 200px;
  /* height: 200px; */
  top: 0;
  right: 0;
  background: white;
}
#menuDiv{
  display: none;
  position: absolute;
  z-index: 3;
  background: #ffffff;
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: 0 5px 5px #888, 1px 0 1px gray;
}
#menuDiv .menu{
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding-left: 20px;
}
#menuDiv .menu:hover{
  background: #eeeeee;
  cursor: pointer;
  color: #d00f1b;
}
</style>

