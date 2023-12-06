<script lang="js" setup>
import SessionItems from './SessionItems/SessionItems.vue';
import ContactItems from './ContactItems/ContactItems.vue';
import CollectItems from './CollectItems/CollectItems.vue';
import { onMounted } from 'vue';
import moment from 'moment';
import store from 'store';

onMounted(() => {
});

const mainStore = store();

</script>

<template>
    <div class="container-a">
        <SessionItems v-if="mainStore.indexSelected === 'session'"></SessionItems>
        <ContactItems v-if="mainStore.indexSelected === 'contacts'"></ContactItems>
        <CollectItems v-if="mainStore.indexSelected === 'collect'"></CollectItems>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>