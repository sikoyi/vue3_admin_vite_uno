//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
const constantRoute = [
	{
		//登录
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		name: 'login',
		meta: {
			title: '登录', //菜单标题
			hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
			icon: 'Promotion', //菜单文字左侧的图标,支持element-plus全部图标
		},
	},
	{
		path: '/',
		component: () => import('@/layout/index.vue'),
		name: 'layout',
		meta: {
			title: '',
			hidden: false,
			icon: '',
		},
		redirect: '/home',
		children: [
			{
				//首页
				path: '/home',
				component: () => import('@/layout/index.vue'),
				name: 'home',
				meta: {
					title: '首页', //菜单标题
					hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
					icon: 'HomeFilled', //菜单文字左侧的图标,支持element-plus全部图标
				},
			},
		],
	},
];

export default constantRoute;
export { constantRoute };
