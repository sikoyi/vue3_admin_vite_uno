<template>
	<div>111</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user';

defineOptions({ name: 'Home' });

const userStore = useUserStore();

onMounted(() => {
	console.log(1);

	userStore.userInfo();
});
</script>
