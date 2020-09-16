<template>
    <!-- <h2>主页</h2> -->
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banner="banner"></home-swiper>
        <recommend-view :recommend = 'recommend'></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tabControlCX" :titles="['流行','新款','精选']"></tab-control>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl/TabControl'

import HomeSwiper from './childComps/homeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata} from 'network/home'


export default {
    name:'home',
    data(){
        return{
            // result:null
            banner:[],
            recommend:[]
        }
    },
    components:{
        NavBar,
        TabControl,
        HomeSwiper,
        RecommendView,
        FeatureView
    },
    created(){
        //1.请求多个数据
        getHomeMultidata().then(res=>{
            console.log('-------------------')
            console.log(res)
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
        })
    }
}
</script>
<style scoped>
#home{
    padding-top: 44px;
}
.home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
.tabControlCX{
    position: sticky;
    top:44px
}
</style>