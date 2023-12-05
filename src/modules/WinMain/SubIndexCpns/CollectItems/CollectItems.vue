<script lang="js" setup>
import { onMounted, ref, } from 'vue';
import moment from 'moment';
import store from 'store';
import {
    Input,
    List,
    ListItem,
    ListItemMeta,
    Badge,
    Avatar,
} from 'ant-design-vue';
import {
    SearchOutlined
} from '@ant-design/icons-vue'
import { timeHandle } from 'common/utils'

onMounted(() => {
});

const mainStore = store();

function onChange(params) {

}

function activatedItem(item) {
    mainStore.collectSelected = item
}


</script>

<template>
    <div class="search-bar">
        <Input
            style="width: 90%;font-size: 12px;height: 24px;"
            class="search-input"
            size="small"
            allowClear
            placeholder="搜索"
            @change="onChange"
        >
        <template #prefix>
            <SearchOutlined />
        </template>
        </Input>
    </div>
    <div class="scroll-bar">
        <List
            itemLayout="horizontal"
            :bordered="false"
            :split="false"
            :dataSource="mainStore.collectItems"
            size="small"
        >
            <template #renderItem="{ item }">
                <ListItem
                    :class="{ activated: item.type === mainStore.collectSelected.type }"
                    @click="activatedItem(item)"
                >
                    <ListItemMeta>
                        <template #avatar>
                            <component :is="item.icon" />
                        </template>
                        <template #title>
                            <div class="title">
                                <div class="text">
                                    {{ item.text }}
                                </div>
                            </div>
                        </template>
                    </ListItemMeta>
                </ListItem>
            </template>
        </List>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>