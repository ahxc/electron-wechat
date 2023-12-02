<script setup>
import { ref } from 'vue';

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


// 当前激活
const presentItem = ref('session');

function itemClick(key = 'session') {
    presentItem.value = key;
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
            <img :src="item.key === presentItem ? item.fill : item.out">
        </div>
    </div>
</template>
 
<style lang="less" scoped>@import './index.less';</style>