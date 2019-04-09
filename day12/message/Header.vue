<template>
    <header>
        <slot></slot>
        <i class="iconfont icon-share"></i>
    </header>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style lang="scss" scoped>
header {
    width: 100%;
    height: 44px;
    background: #6666BB;
    color: #fff;
    line-height: 44px;
    text-align: center;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    padding:0 20px;
    box-sizing: border-box;
}

i.icon-share {
    float: right;
}
</style>


