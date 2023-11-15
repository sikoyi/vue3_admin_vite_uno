export interface loginResponseData {
	code: number;
	data: {
		token: string;
		message: string;
	};
}

export interface loginForm {
	username: string;
	password: string;
}

export interface userResponseData {
	userId: number;
	avatar: string;
	username: string;
	password: string;
	desc: string;
	roles: string[];
	buttons: string[];
	routes: string[];
	token: string;
}
