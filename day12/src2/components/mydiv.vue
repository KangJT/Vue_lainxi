<template>
    <div>
        <dl class="list">
            <dt><img :src="'http:'+imgPath+'!a-3-540x.jpg'"></dt>
            <dd>
                <p>{{title}}</p>
                <time>{{createdTime}}</time>
            </dd>
        </dl>
    </div>
</template>
<script>
import BScroll from 'better-scroll';

export default {
     props:{
        imgPath:String,
        title:String,
        publishTime:Number
    },
    computed:{
        createdTime(){
          let time=this.publishTime
          let curtime=Date.now() -time;
          if(curtime>86400000){
                return new Date(time).toLocaleDateString();
          }else{
                return parseInt(curtime/1000/60/60)+'小时前'
          }    
        }
    },
    components:{

    },
   
    data(){
        return {

        }
    },
    
    methods:{
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
 .list{
     display: flex;
 }
 .list dt{
     width:30%;
 }
 .list dt >img{
     width: 100%;
    
 }
 .list dd{
     display: flex;
     flex: 1;
     flex-direction: column;
 }
</style>