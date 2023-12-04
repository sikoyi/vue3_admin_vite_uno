<template>
	<div class="flex w-full h-full items-center justify-between tabbar-container">
		<BreadCrumb></BreadCrumb>
		<Setting></Setting>
	</div>
</template>

<script lang="ts" setup>
import BreadCrumb from './breadcrumb/index.vue';
import Setting from './setting/index.vue';
defineOptions({ name: 'TabBar' });
</script>

<style>
.tabbar-container {
	border-bottom: 1px solid rgb(233, 232, 232);
}
</style>
