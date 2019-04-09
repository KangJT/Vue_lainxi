<template>
    <div>
        <li @click="$router.push('/detail/'+val.id)">
        <span>{{val.title}}}</span><span>{{val.autor}}</span>
        </li>
      <button class="button" @click="btn">购买</button>
    </div>
</template>
<script>
export default {
    props:['val'] ,
    components:{

    },
    data(){
        return {
             localdata:[],
        }
    },
    computed:{

    },
   methods:{
        btn(){
            this.bus.$emit('addshop',this.val)
        }
    },
    created(){
       
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.button{
    width: 100px;
    height: 30px;
    border: 0;
    background: red;
    color: antiquewhite;
}
</style>