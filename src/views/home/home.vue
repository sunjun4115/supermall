<template>
    <!-- <h2>主页</h2> -->
    <div>
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banner="banner"></home-swiper>
        <recommend-view :recommend = 'recommend'></recommend-view>
    </div>
  
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/homeSwiper'
import RecommendView from './childComps/RecommendView'

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
        HomeSwiper,
        RecommendView
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
.home-nav{
    background-color: var(--color-tint);
    color: #fff;
}
</style>