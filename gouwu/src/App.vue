<template>
  <div id="app">
    <span class="position">{{buy_mode}}</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      localdata:[],
      buy_mode:0
    }
  },
  created(){
      this.localdata=JSON.parse(localStorage.getItem('shopcar'))||[];
      console.log(this.localdata);
      this.bus.$on('addshop',(data)=>{
      this.localdata.push(data);
      localStorage.setItem('shopcar',JSON.stringify(this.localdata));
    });
  
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
#app div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

}
#app div main{
   width: 100%;
    flex:1;
   background: yellow;
}
#app div footer{
  width: 100%;
  height: 30px;
  background: pink;
}
.position{
  width: 20px;
  height: 20px;
  border-radius:50% ;
  background: red;
  line-height: 20px;
  text-align: center;
  position: absolute;
  bottom: 10px;right:120px;
}
</style>
