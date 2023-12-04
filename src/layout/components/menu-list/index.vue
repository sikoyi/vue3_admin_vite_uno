<template>
	<template v-for="item in menuRouteInfo" :key="item.path">
		<!-- 没有子路由 -->
		<el-menu-item v-if="!item.meta.hidden && !item.children" :index="item.path">
			<!-- 不写在 template 中可以让菜单在折叠时保留图标 -->
			<el-icon>
				<component :is="item.meta.icon"></component>
			</el-icon>
			<template #title>
				<span>{{ item.meta.title }}</span>
			</template>
		</el-menu-item>
		<!-- 只有一个子路由 -->
		<template v-if="item.children && item.children.length === 1">
			<!-- 过滤不展示的路由 -->
			<el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path">
				<el-icon>
					<component :is="item.children[0].meta.icon"></component>
				</el-icon>
				<template #title>
					<span>{{ item.children[0].meta.title }}</span>
				</template>
			</el-menu-item>
		</template>

		<!-- 递归调用 -->
		<el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
			<template #title>
				<el-icon>
					<component :is="item.meta.icon"></component>
				</el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<menuList :menuRouteInfo="item.children"></menuList>
		</el-sub-menu>
	</template>
</template>

<script lang="ts" setup>
defineProps(['menuRouteInfo']);
</script>

<!-- 递归调用自身时需要 -->
<script lang="ts">
export default {
	name: 'menuList',
};
</script>

<style lang="sass" scoped></style>
