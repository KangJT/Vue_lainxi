<template>
    <footer>
        <ul>
            <router-link :to="val.path" v-for="(val,index) in footerdata" :key="index" tag="li">
               {{val.name}}
            </router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
          footerdata:[
          {name:"首页",path:"/index"},
          {name:"分享",path:"/share"},
          {name:"购物",path:"/gouwu"},
          {name:"我的",path:"/mean"}
          ]
        }
    },
    computed:{

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
footer{
    width: 100%;
    height: 40px;
}
 footer ul {
     width: 100%;
     display: flex;
     height: 40px;
 }
   ul li{
       flex: 1
   }
</style>