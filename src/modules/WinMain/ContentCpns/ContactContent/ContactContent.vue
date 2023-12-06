<script lang="js" setup>
import { Avatar, List, ListItem, ListItemMeta, Button } from 'ant-design-vue';
import store from 'store';
const mainStore = store();

</script>

<template>
    <div class="container">
        <List
            class="list"
            itemLayout="vertical"
            :bordered="false"
            :split="false"
            :dataSource="[mainStore.contactSelected]"
            size="small"
        >
            <template #renderItem="{ item }">
                <ListItem>
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
                                <div></div>
                            </div>
                        </template>
                        <template #description>
                            <div class="info">
                                <div>
                                    昵称：{{ item.nickName }}
                                </div>
                                <div>
                                    微信号：{{ item.account }}
                                </div>
                            </div>
                        </template>
                    </ListItemMeta>

                    <div class="actions">
                        <div class="footer">
                            <div style="display: flex;">
                                <div style="width: 74px;color: #9e9e9e">备注名：</div>
                                <div>{{ item.nickName }}</div>
                            </div>
                            <div style="display: flex;">
                                <div style="width: 74px;color: #9e9e9e">来源：</div>
                                <div>{{ item.account }}</div>
                            </div>
                        </div>
                        <div class="footer-button">
                            <Button type="primary">
                                发消息
                            </Button>
                        </div>
                    </div>
                </ListItem>
            </template>
        </List>
    </div>
</template>
 
<style lang="less" scoped>
@import './index.less';
</style>