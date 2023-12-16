<script lang="js" setup>

import {
    Avatar, List, ListItem, ListItemMeta, Button,
    Layout,
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
    Input,
    Textarea
} from 'ant-design-vue';
import { ref } from 'vue'

import store from 'store';
const mainStore = store();

const inputValue = ref('')

function pressEnter(e) {
    console.log(e)
}
</script>

<template>
    <Layout class="layout">
        <LayoutHeader class="header">
            {{ mainStore.sessionSelected.mark }}
        </LayoutHeader>
        <LayoutContent class="content">
            <!-- todo -->
        </LayoutContent>
        <LayoutFooter class="footer">
            <Layout class="input-content">
                <LayoutHeader class="bar">
                    <!-- todo -->
                </LayoutHeader>
                <LayoutContent class="input">
                    <Textarea
                        class="text-area"
                        :bordered="false"
                        @pressEnter="pressEnter"
                    />
                </LayoutContent>
                <LayoutFooter class="footer-btn">
                    <Button
                        class="submit-btn"
                        type="primary"
                        @click="pressEnter"
                        :bodered="false"
                    >
                        发送
                    </Button>
                </LayoutFooter>
            </Layout>
        </LayoutFooter>
    </Layout>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>