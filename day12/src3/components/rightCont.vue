<template>
   <div>
      <list-dl v-for="(val,index) in listdata" :key="index"></list-dl>
   </div>
</template>
<script>
import listDl from './listdl'
export default {
    props:{
        contdata:Object,
        title:String
    },
    components:{
       listDl
    },
    data(){
        return {
            datalist:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.listdata=this.contdata.data.filter(item=>{
            return item.type===this.title;
        })
        console.log(this.listdata)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>