import { defineStore } from 'pinia';
import { ref } from 'vue';

// layout组件相关配置仓库
const useLayOutSettingStore = defineStore('SettingStore', () => {
	const fold = ref(false); // 控制左侧菜单是否折叠
	const refresh = ref(false); // 局部刷新

	return {
		fold,
		refresh,
	};
});

export default useLayOutSettingStore;
