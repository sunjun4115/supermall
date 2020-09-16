<template>
    <div class="tabControl">
        <div v-for="(item, index) in titles" :key="index" class="tabCotrol-item" 
        :class="{activeC:index === currentIndex}"
        @click='itemClick(index)'>
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
        
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            return this.currentIndex = index
        }
    }
}
</script>
<style scoped>
.tabControl{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background: #ffffff;
}
.tabCotrol-item{
    flex: 1;
   
}
.tabCotrol-item span{
 padding: 5px;
}
.activeC{
    color: var(--color-high-text);
    
}
.activeC span{
border-bottom:2px solid var(--color-tint)
}
</style>