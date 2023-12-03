<script setup>
import { defineProps, onMounted, reactive } from 'vue';

const props = defineProps({
    data: Object
});

const { data = {} } = props;

const sessionData = reactive(data);

onMounted(() => {
});
</script>

<template>
    <div class="content-bar">
        <img src="/image/portrait.jpg">
        <div class="content-text">
            <div class="title">{{ sessionData.name }}</div>
            <div class="message">{{ sessionData.message }}</div>
        </div>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>