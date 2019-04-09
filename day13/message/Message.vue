<template>
    <div class="message">

        <Head>篱笆闲聊</Head>
        <div class="top" slot="title">
            <p>
                <i class="iconfont icon-xiaoxi"></i>
                <span>闲聊</span>
            </p>
            <i class="iconfont icon-gerenxinxi"></i>
        </div>
        <main>
            <ul class="list">
                <li v-for="(i,k) in data" :key="k">
                    <h3>{{i.name}}</h3>
                    <p>
                        <i class="iconfont icon-xinxi"></i>
                        <span>{{i.num}}</span>
                        <i class="iconfont icon-05"></i>
                        <span>{{i.timer}}</span>
                    </p>
                </li>
            </ul>
        </main>
        <p slot="icon" class="write" @click="change('/comment')">
            <i class="iconfont icon-bianji"></i>
        </p>
    </div>
</template>
<script>
import Head from './Header.vue'
import bus from '../../bus'
export default {
    name: 'Message',
    created() {

        // bus.$on('sends', (data) => {
        //     console.log(data);
        // })
    },
    beforeDestory() {
        // bus.$off('sends', (dada) => {
        //     console.log(data)
        // })
    },
    mounted() {
        this.$http.get('/api/getData').then(res => {
            const { data } = res.data;
            if (data.code === 1) {
                this.data = data.data;
            } else {
                console.log('请求数据失败')
            }
        }).catch(err => {
            console.log(err)
        })
        bus.$on('sends', (data) => {
            //this.data.$set('')
            // var that=this;
            // this.data.$set(this.data,this.data.length,data);
            //this.data.push(data);
            //console.log(this.data);
            //console.log(this.data);
            //bus.$off('sends');
        })
    },
    watch: {
        'data': function(news, old) {
            // console.log(this.data);
        }
    },
    data() {
        return {
            data: [],
            newArr: []
        }
    },
    components: {
        Head
    },
    methods: {
        change(path) {
            this.$router.push(path);
        }
    }
}
</script>
<style lang="scss" scoped>
.top {
    width: 100%;
    height: 50px;
    background: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 22px;
    color: #6666BB;
    margin-top: 44px;
    i.iconfont {
        font-size: 25px;
    }
}

.write {
    width: 50px;
    height: 50px;
    background: #6666BB;
    border-radius: 50%;
    color: #fff;
    line-height: 50px;
    text-align: center;
    position: fixed;
    right: 15px;
    bottom: 60px;
    i.iconfont {
        font-size: 20px;
    }
}

ul {
    width: 100%;
    li {
        width: 100%;
        height: 80px;
        border-bottom: solid 1px #ccc;
        padding: 10px 15px;
        box-sizing: border-box;
        p {
            color: gray;
            font-size: 18px;
            margin-top: 15px;
            i.iconfont {
                font-size: 20px;
            }
            span {
                margin-right: 20px;
            }
        }
    }
}
</style>


