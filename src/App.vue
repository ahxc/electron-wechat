<script setup>
import WinLogin from './modules/WinLogin/WinLogin.vue';
import WinMain from './modules/WinMain/WinMain.vue';

import { ref } from 'vue';

const loginSuccess = ref(false)

</script>

<template>
    <WinLogin v-if="loginSuccess" />
    <WinMain v-else />
</template>
 
<style lang="less" scoped></style>