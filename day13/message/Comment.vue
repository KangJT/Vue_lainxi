<template>
    <div>

        <Head>
            <i class="iconfont icon-xiangzuo" @click="change('/message')"></i>
            <span>发帖</span>
        </Head>
        <Input></Input>
    </div>
</template>
<script>
import Head from './Header.vue'
import Input from './Input'
export default {
    name: 'Com',
    components: {
        Head,
        Input
    },
    methods: {
        change(path) {
            this.$router.push(path);
        }
    }
}
</script>
<style lang="scss" scoped>
.icon-xiangzuo {
    float: left;
}
</style>


