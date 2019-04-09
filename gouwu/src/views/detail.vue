<template>
    <div>
详情{{$route.params.id}}
{{obj}}
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
localdata:[],
obj:{}
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.localdata=JSON.parse(localStorage.getItem('shopcar'))||[];
         console.log(this.localdata);
        this.bus.$on('addshop',(data)=>{ 
        this.localdata.push(data);
        let obj=this.localdata.find(item=>item.id==data.id);
        console.log(obj)
       this.obj=obj;
        localStorage.setItem('shopcar',JSON.stringify(this.localdata));
        });
    
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>