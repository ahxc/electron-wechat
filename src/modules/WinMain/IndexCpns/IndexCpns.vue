<script lang="js" setup>
import { ref, onMounted } from 'vue';
import store from 'store/index.js';

const mainStore = store();

function itemClick(key = 'session') {
    mainStore.indexSelected = key;
}

onMounted(() => [

])
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
            <img :src="item.key === mainStore.indexSelected ? item.fill : item.out">
        </div>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>