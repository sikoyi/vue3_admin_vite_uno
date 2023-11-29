<template>
	<el-scrollbar class="h-[calc(100vh-var(--base-menu-logo-height))]">
		<el-menu background-color="#3B5998" text-color="white">
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="2">菜单</el-menu-item>
			<el-sub-menu index="3">
				<template #title>
					<div>权限管理</div>
				</template>
				<el-menu-item index="3-1">角色管理</el-menu-item>
			</el-sub-menu>
		</el-menu>
	</el-scrollbar>
</template>

<script lang="ts" setup>
defineOptions({ name: 'Menu' });

</script>

<style lang="sass" scoped></style>
