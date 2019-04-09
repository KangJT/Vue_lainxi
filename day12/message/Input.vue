<template>
    <div class="input">
        <input type="text" placeholder="请输入标题" v-model="opts.name">
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容" v-model="opts.num"></textarea>
         <button @click="send"><router-link :to="{path:'/message',query:opts}">发送</router-link></button> 
        <!-- <button><router-link :to="{path:'/message',query:{opts}}">发送</router-link></button> -->
    </div>
</template>
<script>
import bus from '../../bus'
export default {
    name: 'Input',
    data() {
        return {
            opts: {
                name: '',
                num: '',
                timer: new Date()
            }
        }
    },
    methods:{
        send(){
            //bus.$emit('sends',this.opts);
        }
    },
    beforeDestory(){
        bus.$emit('sends',this.opts);
    }
}
</script>
<style lang="scss" scoped>
.input {
    margin-top: 44px;
}

input {
    width: 100%;
    border: none;
    padding: 0 10px;
    border-bottom: solid 1px #ccc;
    box-sizing: border-box;
    height: 40px;
}

textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    border-bottom: solid 1px #ccc;
}

button {
    border: solid 1px #ccc;
    padding: 5px 15px;
    color: #6666BB;
    background: #F8F2EE;
    border-radius: 8px;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
}
</style>


