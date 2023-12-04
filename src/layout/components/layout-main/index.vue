<template>
	<router-view v-slot="{ Component }">
		<!-- 增加路由切换时的过渡动画 -->
		<transition name="fade">
			<component :is="Component" v-if="flag"></component>
		</transition>
	</router-view>
</template>

<script lang="ts" setup>
import { watch, ref, nextTick } from 'vue';
import useLayOutSettingStore from '@/store/modules/setting';
defineOptions({ name: 'LayoutMain' });

const layoutStore = useLayOutSettingStore();

let flag = ref(true);

watch(
	() => layoutStore.refresh,
	() => {
		flag.value = false;
		nextTick(() => {
			// 当销毁完成后 DOM更新完毕后再进行创建
			flag.value = true;
		});
	},
);
</script>
