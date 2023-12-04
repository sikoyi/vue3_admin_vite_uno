<template>
	<el-aside class="bg-[var(--base-menu-background)]" :class="{ fold: layoutStore.fold }">
		<Logo></Logo>
		<el-menu
			:router="true"
			:default-active="$route.path"
			:collapse="layoutStore.fold"
			background-color="#3B5998"
			text-color="white"
			class="h-[calc(100vh-var(--base-tabbar-height))]"
		>
			<menu-list :menuRouteInfo="userStore.menuRoutes"></menu-list>
		</el-menu>
	</el-aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Logo from '../logo/index.vue';
import MenuList from '../menu-list/index.vue';

import useUserStore from '@/store/modules/user';
import useLayOutSettingStore from '@/store/modules/setting';

defineOptions({ name: 'SideNavBar' });

const layoutStore = useLayOutSettingStore();
const userStore = useUserStore();
const $route = useRoute();
</script>

<style lang="scss" scoped>
.el-aside {
	width: var(--base-menu-width);
	transition: all 0.3s;
	&.fold {
		width: var(--base-menu-min-width);
	}
	// 修复左侧菜单1px边框
	.el-menu {
		border-right: none;
	}
}
</style>
