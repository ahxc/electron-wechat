<script setup>
import SessionItems from './SessionItems/SessionItems.vue';
import { onMounted } from 'vue';
import moment from 'moment';
import store from 'store';

onMounted(() => {
});

const mainStore = store();

</script>

<template>
    <div class="container-a">
        <SessionItems v-if="mainStore.presentItem === 'session'"></SessionItems>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>