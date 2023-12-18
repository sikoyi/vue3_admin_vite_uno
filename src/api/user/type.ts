export interface responseData {
	code: number;
	message: string;
	ok: boolean;
}
// 登录接口返回数据
export interface loginResponseData extends responseData {
	data: {
		accessToken: string;
		refreshToken: string;
	};
}

// 登录参数
export interface loginForm {
	username: string;
	password: string;
}

// 用户信息接口返回值
export interface userResponseData extends responseData {
	data: {
		menus: any[];
		permissions: any[];
		user: {
			id: number;
			nickname: string;
			avatar: string;
		};
		roles: string[]; // 身份信息
	};
}
