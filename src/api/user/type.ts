export interface responseData {
	code: number;
	message: string;
	ok: boolean;
}
// 登录接口返回数据
export interface loginResponseData extends responseData {
	data: string;
}

// 登录参数
export interface loginForm {
	username: string;
	password: string;
}

// 用户信息接口返回值
export interface userResponseData extends responseData {
	data: {
		routes: string[];
		buttons: string[];
		roles: string[];
		name: string;
		avatar: string;
	};
}
