<script setup>
import SearchBar from './SearchBar/SearchBar.vue';
import ContentBar from './ContentBar/ContentBar.vue';
import { onMounted } from 'vue';
import moment from 'moment';
import store from 'store';

onMounted(() => {
});

const mainStore = store();

</script>

<template>
    <div class="container-a">
        <div class="search-bar">
            <SearchBar />
        </div>
        <div class="scroll-bar">
            <div class="scroll-content">
                <ContentBar
                  v-for="(item, index) in mainStore.sessionItems"
                  :key="item.id"
                  :data="item"
                />
            </div>
        </div>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>