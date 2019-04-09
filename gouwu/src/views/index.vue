<template>
    <div>
        <main>
            <!-- {{data}} -->
            <ul>
                <elDl  
                v-for="(val,i) in data" 
                :key="i"
                :val="val">
                </elDl>   
            </ul>
        </main>
        <elFooter></elFooter>
    </div>
</template>
<script>
import axios from 'axios';
import elDl from '@/components/eldl'
export default {
    props:{

    },
    components:{
      elDl
    },
    data(){
        return {
           data:[]
        }
    },
    computed:{

    },
    methods:{
       
    },
    created(){
       axios.get('/api/getdata').then((data)=>{
           this.data=data.data.data.splice(0,5)
       })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>