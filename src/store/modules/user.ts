import { defineStore } from 'pinia';

import type { loginForm } from '@/api/user/type';
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user';
import { ref } from 'vue';
import { constantRoute } from '@/router/routes';
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token';
import { ElNotification } from 'element-plus';

const useUserStore = defineStore('User', () => {
	const token = ref(GET_TOKEN());
	const username = ref(''); // 用户名称
	const avatar = ref(''); // 用户头像

	const userLogin = async (data: loginForm) => {
		const result = await reqLogin(data);
		if (result.code === 200) {
			token.value = result.data;
			SET_TOKEN(token.value);
			return 'ok';
		} else {
			return Promise.reject(new Error(result.data));
		}
	};

	// 获取用户信息
	const userInfo = async () => {
		const result = await reqUserInfo();
		if (result.code === 200) {
			// 更新用户信息
			const data = result.data;
			username.value = data.name;
			avatar.value = data.avatar;
			return 'ok';
		}

		return Promise.reject(new Error(result.message));
	};

	/**
	 * 退出登录
	 */
	const userLogout = async () => {
		const result = await reqLogout();
		if (result.code === 200) {
			token.value = '';
			username.value = '';
			avatar.value = '';
			REMOVE_TOKEN();
			return 'ok';
		}
		return Promise.reject(new Error(result.message));
	};

	return {
		userLogin,
		token, // 用户token
		menuRoutes: constantRoute, //生成菜单所需的数组
		userInfo,
		username,
		avatar,
		userLogout,
	};
});

export default useUserStore;
