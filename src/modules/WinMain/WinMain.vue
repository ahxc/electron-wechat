<script lang="js" setup>
import IndexCpns from './IndexCpns/IndexCpns.vue';
import SubIndexCpns from './SubIndexCpns/SubIndexCpns.vue'
import ContentCpns from './ContentCpns/ContentCpns.vue'

</script>

<template>
    <div class="container">
        <div class="index">
            <IndexCpns />
        </div>
        <div class="sub-index">
            <SubIndexCpns />
        </div>
        <div class="content">
            <ContentCpns />
        </div>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>