<script lang="js" setup>
import CollectionContent from './CollectionContent/CollectionContent.vue'
import SessionContent from './SessionContent/SessionContent.vue'
import ContactContent from './ContactContent/ContactContent.vue'
import store from 'store/index.js';

const mainStore = store();

</script>

<template>
    <CollectionContent v-if="mainStore.indexSelected === 'collect'" />
    <SessionContent v-if="mainStore.indexSelected === 'session'" />
    <ContactContent v-if="mainStore.indexSelected === 'contacts'" />
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>