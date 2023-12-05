<script lang="js" setup>
function codeClick(params) {
    window.winHandle.hideWinLogin();
    window.winHandle.createWinMain();
}
</script>

<template>
    <div class="title-bar">
        <div>微信</div>
        <div class="img-container">
            <img
                height="12"
                width="12"
                src="/image/close.png"
            >
        </div>
    </div>

    <div
        class="content"
        @click="codeClick"
    >
        <div class="title">扫码登录</div>
        <div class="code"></div>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>