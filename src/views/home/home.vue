<template>
    <!-- <h2>主页</h2> -->
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <scroll class="content" ref='Scroll' :probe-type='probetype' @scroll='contentScroll' :pull-up-load='true' @pullingUp="loadMore">
            <!-- <div class="wrapper">
                <div class="content"> -->
                    <home-swiper :banner="banner"></home-swiper>
                    <recommend-view :recommend = 'recommend'></recommend-view>
                    <feature-view></feature-view>
                    <tab-control class="tabControlCX" :titles="['流行','新款','精选']"></tab-control>
                   
                <!-- </div>
            </div> -->
           <p>ppp1</p>
           <p>ppp2</p>
           <p>ppp3</p>
           <p>ppp4</p>
           <p>ppp5</p>
           <p>ppp6</p>
           <p>ppp7</p>
           <p>ppp8</p>
           <p>ppp9</p>
           <p>ppp10</p>
           <p>ppp11</p>
           <p>ppp12</p>
           <p>ppp13</p>
           <p>ppp14</p>
           <p>ppp15</p>
           <p>ppp16</p>
           <p>ppp17</p>
           <p>ppp18</p>
           <p>ppp19</p>
           <p>ppp20</p>
        </scroll>
        <back-top @click.native="topClick" v-show="isShow"></back-top>
       
        <!-- <ul>
            <li>1</li>
            <li>2</li>
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
        </ul> -->
    </div>
  
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl/TabControl'
import scroll from 'components/common/scroll/scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComps/homeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata} from 'network/home'


// import BetterScroll from 'better-scroll'


export default {
    name:'home',
    data(){
        return{
            // result:null
            banner:[],
            recommend:[],
            probetype:3,
            isShow:false
        }
    },
    components:{
        NavBar,
        TabControl,
        HomeSwiper,
        RecommendView,
        FeatureView,
        scroll,
        BackTop
    },
    created(){
        //1.请求多个数据
        getHomeMultidata().then(res=>{
            console.log('-------------------')
            console.log(res)
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
        })
    },
    methods:{
        //scrollTo(x,y,ms)
        topClick(){
            console.log('backTop');
            console.log(this.$refs.Scroll.scroll.scrollTo(0,0,500))
            this.$refs.Scroll.scrollTo(0,0,500)
        },
        contentScroll(position){
            // console.log('contentScroll',position)
            if(-position.y>200){
                this.isShow=true
            }else{
               this.isShow=false
            }
            
        },
        loadMore(){
            console.log('loadMore');
            // this.getHomeGoods(this.currentType)
            // this.$refs.scroll.finishPullUp()
        }
    },
    mounted(){
        console.log('挂载')
        //  this.scroll = new BetterScroll(document.querySelector('.wrapper'),{
        //     probeType:3,
        //     pullUpLoad:true
        // })
    }
}
</script>
<style scoped>
#home{
    padding-top: 44px;
    position: relative;
    /* height: 100vh; */
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
    top:44px;
}
/* .wrapper{
    height: 300px;
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
} */
.content{
    /* height: 600px; */
    /* overflow: hidden; */
    position: absolute;
    top: 44px;
    bottom: 49px;
}
</style>