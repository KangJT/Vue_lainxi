<template>
  <div id="app">
      <header>{{title}}</header>
      <main>
        <nav>
          <span><i class="iconfont icon-weixin icon"></i>闲聊</span>
          <span><i class="iconfont icon-wode icon"></i></span>
        </nav>
        <section>
          <list-dl />
          <Dialog/>
        </section>
      </main>
  </div>
</template>

<script>
import listDl from './components/listdl';
import Dialog from './components/dialog';
import './assets/fonts/iconfont.css'
// import {data} from '../mock/datas.js'

export default {
  name: 'App',
  components: {
    listDl,
    Dialog
  },
  props:{
     title:String
  },
  data(){
    return{
    }
  },
  mounted(){
   
  },
  computed:{
   
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
 width: 100%;
 height: 100%;
 margin: 0;padding: 0;
 list-style: none;
 display: flex;
 flex-direction: column;
}
#app header{
  width: 100%;
  height: 40px;
 background: rebeccapurple;
 color: aliceblue;
  text-align: center;
 line-height: 40px;
}
.active{
  font-weight: bolder;
  color: blue;
}
main{
  flex: 1;
  display: flex;
  flex-direction: column;
}
main nav{
 background: #cdcdcd;
 width: 100%;
 height: 50px;
 display: flex;
 justify-content:space-between;
 padding: 0 10px;
 box-sizing: border-box;
 align-items: center;
}
nav span{
  font-size: 30px;color: rebeccapurple;
}
.icon{
  font-size: 30px;
}
section{
  flex: 1;
}
</style>
