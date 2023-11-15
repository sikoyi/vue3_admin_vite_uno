import request from '@/utils/request';
import type { loginForm, loginResponseData, userResponseData } from './type';

enum API {
	LOGIN_URL = '/user/login',
	USERINFO_URL = '/user/info',
}

// 登录接口方法
export const reqLogin = (fromData: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, fromData);

export const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL);
