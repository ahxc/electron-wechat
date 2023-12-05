<script lang="js" setup>
import {
    Layout,
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
    List,
    ListItem,
    ListItemMeta,
    Avatar,
} from 'ant-design-vue';
import store from 'store'
import {
    reactive,
    ref,
    watch,
    watchEffect,
} from 'vue'

const mainStore = store();

const data = ref(mainStore.collectData)

function collectData(params) {
    if (mainStore.collectSelected.type === 'all') {
        return mainStore.collectData
    }
    return mainStore.collectData.filter((item) => {
        return mainStore.collectSelected.type === item.type
    })
}

</script>

<template>
    <Layout class="layout">
        <LayoutHeader class="header">{{ mainStore.collectSelected.text }}</LayoutHeader>
        <LayoutContent class="content">
            <List
                itemLayout="vertical"
                size="large"
                :dataSource="collectData()"
            >
                <template #renderItem="{ item }">
                    <ListItem
                        key="item.title"
                        class="collect-item"
                    >
                        <template #actions>
                            <div class="footer">
                                <span class="shaller">{{ item.shaller }}</span>
                                <span class="date">{{ item.date }}</span>
                            </div>
                        </template>
                        <template #extra>
                            <img
                                width="60"
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        </template>
                        <ListItemMeta :description="item.description">
                            <template #title>
                                {{ item.title }}
                            </template>
                        </ListItemMeta>
                    </ListItem>
                </template>
            </List>
        </LayoutContent>
    </Layout>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>