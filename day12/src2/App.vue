<template>
  <div id="app">
    <div> 
      <my-dl 
      v-for="val in data" 
      :key="val.id"
      :imgPath="val.imgPath"
      :title="val.title"
      :publishTime="val.publishTime"></my-dl>
     </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import myDl from './components/mydiv'
import data from '../mock/data.json'
import BetterScroll from 'better-scroll'
console.log(BetterScroll)
console.log(data.data)
export default {
  name: 'App',
  components: {
   myDl
  },
  data(){
    return{
       data:data.data
    }
  },
  mounted(){
   
  },
  computed(){
    new BetterScroll('#app')
  }
  
}
</script>

<style>

#app {
 width: 100%;
 height: 100%;
 margin: 0;padding: 0;
 list-style: none;
}
</style>
