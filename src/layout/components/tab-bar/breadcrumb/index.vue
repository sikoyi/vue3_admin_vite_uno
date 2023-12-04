<template>
	<div class="tabbar-left flex items-center">
		<el-icon @click="changeIcon">
			<component :is="layoutStore.fold ? 'Fold' : 'Expand'"></component>
		</el-icon>

		<el-breadcrumb separator-icon="ArrowRight" class="ml-20px">
			<el-breadcrumb-item
				class="flex items-center"
				v-for="item in $route.matched"
				:index="item.path"
				v-show="item.meta.title"
				:to="item.path"
			>
				<el-icon class="mr-3px">
					<component :is="item.meta.icon"></component>
				</el-icon>
				<span class="cursor-pointer">{{ item.meta.title }}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import useLayOutSettingStore from '@/store/modules/setting';
defineOptions({ name: 'Breadcrumb' });

const $route = useRoute();
const layoutStore = useLayOutSettingStore();

const changeIcon = () => {
	layoutStore.fold = !layoutStore.fold;
};
</script>
