<template>
	<div class="layout-container">
		<el-container class="w-full h-full">
			<side-nav-bar></side-nav-bar>
			<el-container>
				<el-header class="header-nav">
					<tab-bar></tab-bar>
				</el-header>
				<el-main class="content left-[var(--base-tabbar-height)]">
					<layout-main></layout-main>
				</el-main>
				<el-footer></el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import sideNavBar from './components/side-nav-bar/index.vue';
import tabBar from './components/tab-bar/index.vue';
import LayoutMain from './components/layout-main/index.vue';
defineOptions({ name: 'Layout' });
</script>
<style lang="scss" scoped>
.layout-container {
	width: 100vw;
	height: 100vh;
}

.fade-enter-from {
	opacity: 0;
	transform: scale(0);
}

.fade-enter-active {
	transition: all 1s;
}

.fade-enter-to {
	opacity: 1;
	transform: scale(1);
}
</style>
