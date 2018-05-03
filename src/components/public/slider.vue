<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.index">
                <router-link :to="{name:item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </section>
</template>

<script>
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import "swiper/dist/css/swiper.css"
    export default {
        components:{
            swiper,
            swiperSlide
        },
        props:{
            cname:{
                type    : String,
                default : ""
            },
            options:{
                type:Object,
                default(){
                    return{
                        //可选选项，自动滑动
                        autoplay:true,
                        loop:true,
                        pagination:{
                            el:".swiper-pagination",
                        },
                        notNextTick:true
                    }
                },
            },
            items:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style>
    
</style>