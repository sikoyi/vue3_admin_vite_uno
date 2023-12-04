import vue from '@vitejs/plugin-vue';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { defineConfig, loadEnv } from 'vite';
import UnoCSS from 'unocss/vite';
// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());
	return {
		plugins: [
			vue(),
			UnoCSS(),
			createSvgIconsPlugin({
				// Specify the icon folder to be cached
				iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
				// Specify symbolId format
				symbolId: 'icon-[dir]-[name]',
			}),
			viteMockServe({
				mockPath: 'mock',
				enable: true,
				logger: true, // 开启控制台显示请求日志
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve('./src'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					javascriptEnabled: true,
					additionalData: '@import "./src/styles/variable.scss";',
				},
			},
		},
		server: {
			proxy: {
				[env.VITE_APP_BASE_API]: {
					// 获取数据的服务器地址
					target: env.VITE_SERVER,
					// 需要代理跨域
					changeOrigin: true,
					// 路径重写
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
		},
	};
});
