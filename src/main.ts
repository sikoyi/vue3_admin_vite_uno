import { createApp } from 'vue';

import 'reset.css';
import 'element-plus/dist/index.css';
import 'virtual:svg-icons-register';
import 'virtual:uno.css';
import './styles/index.scss';

import App from './App.vue';
import pinia from './store';

import gloablComponent from './components/index';
import ElementPlus from 'element-plus';
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import router from './router';

const app = createApp(App);
app.use(ElementPlus, {
	locale: zhCn,
});
app.use(gloablComponent);

app.use(router);
app.use(pinia);

app.mount('#app');
