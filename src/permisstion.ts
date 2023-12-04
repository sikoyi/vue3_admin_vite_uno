// 路由鉴权
import router from '@/router';
import nporgress from 'nprogress';
import 'nprogress/nprogress.css'; // 引入进度条样式
nporgress.configure({ showSpinner: false });

import useUserStore from './store/modules/user';
import pinia from './store';

import type { RouteLocationNormalized } from 'vue-router';
import setting from './setting';

const userStore = useUserStore(pinia); // 在使用子仓库前需要先实例化pinia

// 前置路由守卫
router.beforeEach(async (to: RouteLocationNormalized, from, next) => {
	// 已登录
	document.title = `${setting.title} - ${to.meta.title}`;
	nporgress.start();
	const { token, username } = userStore;
	if (token) {
		if (to.path == '/login') {
			next({ path: '/' });
		} else {
			// 登录成功访问其余路由登录排除必须有用户信息
			if (username) {
				next();
			} else {
				try {
					await userStore.userInfo();
					next();
				} catch (error) {
					await userStore.userLogout();
					next({ path: '/login' });
				}
			}
		}
	} else {
		// 未登录
		if (to.path == '/login') next();
		else next({ path: '/login', query: { redirect: to.path } });
	}
});

// 后置路由守卫
router.afterEach((to, from) => {
	nporgress.done();
});
