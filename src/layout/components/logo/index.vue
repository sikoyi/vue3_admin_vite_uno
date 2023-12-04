<template>
	<div v-if="setting.logoHidden" class="logo-container">
		<img class="w-40px h-40px" :src="setting.logoPath" alt="" />
		<p class="ml-10px whitespace-nowrap" v-show="!layoutStore.fold">{{ setting.title }}</p>
	</div>
</template>

<script lang="ts" setup>
import setting from '@/setting';
import useLayOutSettingStore from '@/store/modules/setting';
defineOptions({ name: 'Logo' });

const layoutStore = useLayOutSettingStore();
</script>

<style lang="scss" scoped>
.logo-container {
	height: var(--base-menu-logo-height);
	color: white;
	display: flex;
	align-items: center;
	margin-left: 20px;
	font-size: var(--base-logo-title-font-size);
	font-weight: bold;
	cursor: pointer;
}
</style>
