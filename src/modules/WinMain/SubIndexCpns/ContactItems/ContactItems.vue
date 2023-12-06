<script lang="js" setup>
import { onMounted, ref, } from 'vue';
import moment from 'moment';
import store from 'store';
import {
    Input,
    List,
    ListItem,
    ListItemMeta,
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
    mainStore.contactSelected = item
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
            :dataSource="mainStore.contactItems"
            size="small"
        >
            <template #renderItem="{ item }">
                <ListItem
                    :class="{ activated: item.id === mainStore.contactSelected.id }"
                    @click="activatedItem(item)"
                >
                    <ListItemMeta>
                        <template #avatar>
                            <Avatar
                                class="avatar"
                                shape="square"
                                src="/image/portrait.jpg"
                            />
                        </template>
                        <template #title>
                            <div class="title">
                                <div class="text">
                                    {{ item.name }}
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