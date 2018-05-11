<template lang="html">
    <div class="w">
        <ul class="nav-content">
            <li class="nav-item">
                <div class="clearfix">
                    <p><router-link :to="{name:'serviceDelivery'}">服务交付</router-link></p>
                    <div class="nav-msg"><router-link :to="{name:'serviceDelivery'}">服务查询</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:'serviceManagement'}">服务管理</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">服务化案例一</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">服务化案例二</router-link></div>
                </div>
            </li>
            <li class="nav-item">
                <div>
                    <p><router-link :to="{name:''}">流程管理</router-link></p>
                    <div class="nav-msg"><router-link :to="{name:''}">应用流程定制</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">应用流程查询</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">应用流程管理</router-link></div>
                </div>
            </li>
            <li class="nav-item">
                <div>
                    <p><router-link :to="{name:''}">版本管理</router-link></p>
                    <div class="nav-msg"><router-link :to="{name:''}">版本安装</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">版本同步</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">版本生效</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">版本查询</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">版本验收</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">统计分析</router-link></div>
                </div>
            </li>
            <li class="nav-item">
                <div>
                    <p><router-link :to="{name:''}">HIPER与PE评估</router-link></p>
                    <div class="nav-msg"><router-link :to="{name:''}">PTF评估</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">PTF查询</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">HOLDDATA REPORT</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">更新SMPE</router-link></div>
                </div>
            </li>
            <li class="nav-item">
                <div>
                    <p><router-link :to="{name:''}">测试支持</router-link></p>
                    <div class="nav-msg"><router-link :to="{name:''}">ONDEMAND准备</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">ONDEMAND数据收集</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">测试常用数据恢复</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">生产验证性能数据</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">压测报告</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">子系统搭建</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">统计分析</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">问题管理</router-link></div>
                </div>
            </li>
            <li class="nav-item">
                <div>
                    <p><router-link :to="{name:''}">系统管理</router-link></p>
                    <div class="nav-msg"><router-link :to="{name:''}">用户管理</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">配置管理</router-link></div>
                    <div class="nav-msg"><router-link :to="{name:''}">权限管理</router-link></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav-content{
        margin-top: 10px;
        width: 100%;
        height: 45px;
        background: #f0f3ef;
        display: flex;    
    }    
    .nav-content .nav-item{
        text-align: center;
        width: 16.66%;
    }
    p{
        height: 45px;
        line-height: 45px;
        font-size: 22px;
        font-weight: 400;
        }
    p a{
        width: 100%;
        display: inline-block;
        color: #666;
        text-decoration: none;
    }
    .nav-item p:hover{
        cursor: pointer;
        background: -webkit-linear-gradient(#f0f3ef, #ABABA8);
    }
    .nav-item p:hover a{
        color: #F01414;
    }
    .nav-item:hover .nav-msg{
        display: block;
    }
    .nav-msg{
        display: none;
        width: 100%;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        font-weight: 100;
        float: left;
        background-color: #f0f3ef;
        z-index: 2;
        position: relative;
    }
    .clearfix:after{
        content:"0";
        display: block;
        clear: both;
        visibility: hidden;
        height: 0;
        }
    .nav-msg a{
        width: 100%;
        display: inline-block;
        color: #666;
        text-decoration: none;
    }
    .nav-msg:hover{
        cursor: pointer;
        background: -webkit-linear-gradient(#f0f3ef, #ABABA8);
    }
    .nav-msg:hover a{
        color: #F01414;
    }
</style>