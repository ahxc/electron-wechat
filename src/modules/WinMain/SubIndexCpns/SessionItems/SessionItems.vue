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
import { SearchOutlined } from '@ant-design/icons-vue'
import { timeHandle } from 'common/utils'

onMounted(() => {
});

const mainStore = store();

function onChange(params) {

}

function activatedItem(item) {
    mainStore.sessionSelected = item
}

</script>

<template>
    <div class="search-bar">
        <div class="drag-area"></div>
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
            :dataSource="mainStore.sessionItems"
            size="small"
        >
            <template #renderItem="{ item }">
                <ListItem
                    :class="{ activated: item.id === mainStore.sessionSelected.id }"
                    @click="activatedItem(item)"
                >
                    <ListItemMeta>
                        <template #avatar>
                            <Badge dot>
                                <Avatar
                                    class="avatar"
                                    shape="square"
                                    src="/image/portrait.jpg"
                                />
                            </Badge>
                        </template>
                        <template #title>
                            <div class="title">
                                <div class="text">
                                    {{ item.name }}
                                </div>
                                <div class="time">
                                    {{ timeHandle(item.time) }}
                                </div>
                            </div>
                        </template>
                        <template #description>
                            <div class="description">
                                {{ item.message }}
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