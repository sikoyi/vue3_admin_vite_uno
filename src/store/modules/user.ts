import { defineStore } from 'pinia';

import type { loginForm } from '@/api/user/type';
import { reqLogin } from '@/api/user';
import { ref } from 'vue';

const useUserStore = defineStore('User', () => {
	const token = ref(localStorage.getItem('TOKEN'));

	const userLogin = async (data: loginForm) => {
		const result = await reqLogin(data);
		if (result.code === 200) {
			token.value = result.data.token;
			localStorage.setItem('TOKEN', token.value);
			return 'ok';
		} else {
			return Promise.reject(new Error(result.data.message));
		}
	};

	return {
		userLogin,
		token,
	};
});

export default useUserStore;
