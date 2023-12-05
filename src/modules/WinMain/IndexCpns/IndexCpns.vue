<script lang="js" setup>
import { ref } from 'vue';
import store from 'store/index.js';

const mainStore = store();

function itemClick(key = 'session') {
    mainStore.presentItem = key;
}
</script>

<template>
    <div class="portrait">
        <img
            src="/image/portrait.jpg"
            alt=""
        >
    </div>

    <div class="bar">
        <div
            class="item"
            v-for="(item, index) in mainStore.barItem"
            key="item"
            @click="itemClick(item.key)"
        >
            <img :src="item.key === mainStore.presentItem ? item.fill : item.out">
        </div>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>