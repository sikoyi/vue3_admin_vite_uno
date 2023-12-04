<template>
	<div class="tabbar-right flex items-center">
		<el-button circle icon="Refresh" @click="updateRefresh"></el-button>
		<el-button circle icon="FullScreen" @click="fullscreen"></el-button>
		<el-button circle icon="Setting"></el-button>

		<el-image class="w-24px h-24px ml-20px mr-15px" :src="userStore.avatar"></el-image>

		<el-dropdown class="outline-none">
			<span class="el-dropdown-link">
				{{ userStore.username }}
				<el-icon class="el-icon--right">
					<arrow-down />
				</el-icon>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item @click="logout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import useLayOutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';

let settingStore = useLayOutSettingStore();
const userStore = useUserStore();
const $router = useRouter();
const $route = useRoute();

defineOptions({ name: 'Setting' });

// 刷新
const updateRefresh = () => {
	settingStore.refresh = !settingStore.refresh;
};

// 全屏
const fullscreen = () => {
	const full = document.fullscreenElement; // 是否已经全屏

	// 进入全屏模式
	if (!full) {
		document.documentElement.requestFullscreen();
	} else {
		// 退出全屏
		document.exitFullscreen();
	}
};

// 退出登录
const logout = async() => {
	await userStore.userLogout();
	$router.replace({ path: '/login', query: { redirect: $route.path } });
};
</script>
