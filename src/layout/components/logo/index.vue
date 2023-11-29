<template>
	<div v-if="setting.logoHidden" class="logo-container">
		<img :src="setting.logoPath" alt="" />
		<p>{{ setting.title }}</p>
	</div>
</template>

<script lang="ts" setup>
import setting from '@/setting';
</script>

<style lang="scss" scoped>
.logo-container {
	width: 100%;
	height: var(--base-menu-logo-height);
	color: white;
	display: flex;
	align-items: center;
	margin-left: 20px;
	font-size: var(--base-logo-title-font-size);
	img {
		width: 40px;
		height: 40px;
	}
}
</style>
