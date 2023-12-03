<script setup>
import { onMounted, ref } from 'vue';
import store from 'store/index.js';

import { debounce } from 'common/utils';

import {
    Input,
} from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';

const mainStore = store();

onMounted(() => {
});

const value = ref('');
function onChange(e) {
    value.value = e.data;
}

</script>

<template>
    <div class="search-bar">
        <Input
          class="search-input"
          size="small"
          allowClear
          :bordered="false"
          placeholder="搜索"
          @change="onChange"
        >
        <template #prefix>
            <SearchOutlined />
        </template>
        </Input>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>