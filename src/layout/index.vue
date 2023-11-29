<template>
	<div class="layout-container">
		<el-container class="w-full h-full">
			<SideNavBar></SideNavBar>
			<el-container>
				<el-header class="header-nav">
				</el-header>
				<el-main class="content left-[var(--base-tabbar-height)]"></el-main>
				<el-footer></el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import SideNavBar from './components/sideNavBar/index.vue';
</script>
<style lang="scss" scoped>
.layout-container {
	width: 100vw;
	height: 100vh;
}
</style>
