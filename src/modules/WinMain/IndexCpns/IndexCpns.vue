<script setup>
import { ref } from 'vue';
import store from 'store/index.js';

const mainStore = store();

const barItem = [
    {
        key: 'session',
        fill: '/image/message-comments-fill.png',
        out: '/image/message-comments.png',
    },
    {
        key: 'contacts',
        fill: '/image/customer-group-fill.png',
        out: '/image/customer-group.png',
    },
    {
        key: 'collect',
        fill: '/image/product-fill.png',
        out: '/image/product.png',
    }];


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
          v-for="(item, index) in barItem"
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