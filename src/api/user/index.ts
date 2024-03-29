import request from '@/utils/request';
import type { loginForm, loginResponseData, userResponseData } from './type';

enum API {
	LOGIN_URL = '/user/login',
	LOGOUT_URL = '/user/logout',
	USERINFO_URL = '/user/get-permission-info',
}

// 登录接口方法
export const reqLogin = (fromData: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, fromData);
// 获取用户信息
export const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL);

export const reqLogout = () => request.post<any, loginResponseData>(API.LOGOUT_URL);
