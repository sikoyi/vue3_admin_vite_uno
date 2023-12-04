//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
const constantRoute = [
	{
		//登录
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		name: 'Login',
		meta: {
			title: '登录', //菜单标题
			hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
			icon: 'Promotion', //菜单文字左侧的图标,支持element-plus全部图标
		},
	},
	{
		path: '/',
		name: 'Layout',
		meta: {
			title: '',
			hidden: false,
			icon: '',
		},
		component: () => import('@/layout/index.vue'),
		redirect: '/home',
		children: [
			// 子路由
			{
				path: '/home',
				component: () => import('@/views/home/index.vue'),
				name: 'Home',
				meta: {
					title: '首页',
					icon: 'HomeFilled',
				},
			},
		],
	},
	{
		path: '/screen',
		component: () => import('@/views/screen/index.vue'),
		name: 'screen',
		meta: {
			title: '数据大屏',
			hidden: false,
			icon: 'Platform',
		},
	},
	{
		path: '/acl',
		component: () => import('@/layout/index.vue'),
		name: 'Acl',
		meta: {
			title: '权限管理',
			icon: 'Lock',
		},
		redirect: '/acl/user',
		children: [
			{
				path: '/acl/user',
				component: () => import('@/views/acl/user/index.vue'),
				name: 'User',
				meta: {
					title: '用户管理',
					icon: 'Avatar',
				},
			},
			{
				path: '/acl/role',
				component: () => import('@/views/acl/role/index.vue'),
				name: 'Role',
				meta: {
					title: '角色管理',
					icon: 'Avatar',
				},
			},
			{
				path: '/acl/permission',
				component: () => import('@/views/acl/permission/index.vue'),
				name: 'Permission',
				meta: {
					title: '菜单管理',
					icon: 'Avatar',
				},
			},
		],
	},
	{
		path: '/product',
		component: () => import('@/layout/index.vue'),
		name: 'Product',
		meta: {
			title: '商品管理',
			hidden: false,
			icon: 'Goods',
		},
		redirect: '/product/attr',
		children: [
			{
				path: '/product/attr',
				component: () => import('@/views/product/attr/index.vue'),
				name: 'Attr',
				meta: {
					title: 'Attr 管理',
					hidden: false,
					icon: 'Orange',
				},
			},
			{
				path: '/product/sku',
				component: () => import('@/views/product/sku/index.vue'),
				name: 'Sku',
				meta: {
					title: 'SKU 管理',
					hidden: false,
					icon: 'Platform',
				},
			},
			{
				path: '/product/spu',
				component: () => import('@/views/product/spu/index.vue'),
				name: 'SPU',
				meta: {
					title: 'SPU 管理',
					hidden: false,
					icon: 'Calendar',
				},
			},
			{
				path: '/product/trademark',
				component: () => import('@/views/product/trademark/index.vue'),
				name: 'Trademark',
				meta: {
					title: '品牌管理',
					hidden: false,
					icon: 'ShoppingCartFull',
				},
			},
		],
	},
	{
		path: '/404',
		component: () => import('@/views/404/index.vue'),
		name: '404',
		meta: {
			title: '404',
			hidden: true,
		},
	},
];

export default constantRoute;
export { constantRoute };
