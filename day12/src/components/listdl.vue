<template>
        <dl class="list">
            <dt>zx</dt> 
            <dd>
                <p>
                    <span><i class="iconfont icon-xinxi"></i> 1 </span>
                    <span></span>
                    <span><i class="iconfont icon-naozhong"></i>2018-05-11</span>
                </p>
                <div class="delete">删除</div>
               <!--// class="delete" @click="deleteItem" :data-index="index" -->
            </dd>
        </dl>
</template>
<script>
export default {
    props:{
      
    },
    components:{

    },
    data(){
        return {

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
  .list{
      width: 100%;
      height:50px;
      border-bottom:1px solid #ccccdd; 
      background: yellow;
      padding: 0 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      
  }
  .list dt{
      width: 100%;
      height: 15px; 
  }
  .list dd{
      width: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;

  }
 
  .delete{
  width:50px;
  height: 100%;
  background: #ff4949;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height:130%;
  position: absolute;
  top:0;
  right: -10px;
}
</style>