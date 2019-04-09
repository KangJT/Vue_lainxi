<template>
  <div id="app">
      <header>{{title}}</header>
      <main>
        <nav>
          <p v-for="(val,index) in navdata" :key="index"
          @click="defaultIndex=index"
          :class="{active:index===defaultIndex}"
          >{{val}}</p>
        </nav>
        <section>
          <h5>{{navdata[defaultIndex]}}</h5>
          <right-cont 
          :contdata="contdata" 
          :title="navdata[defaultIndex]"
          />
        </section>
      </main>
  </div>
</template>

<script>
import rightCont from './components/rightCont'
import {data,navdata} from '../mock/data.js'
console.log(data.data)
export default {
  name: 'App',
  components: {
    rightCont
  },
  props:{
     title:String
  },
  data(){
    return{
      navdata,
      defaultIndex:0,
      contdata:data
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
  background: pink;
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
}
main nav{
  width:40%;
  margin-top:15px; 
}
nav p{
  margin: 10px 5px;
}
section{
  flex: 1;
}
</style>
