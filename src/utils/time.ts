/**
 * 获取当前时间时段是什么时候
 * @returns {string}
 */
export const getTime = (): string => {
	let message = '';

	const hours = new Date().getHours();
	if (hours <= 9) {
		message = '早上';
	} else if (hours <= 18) {
		message = '下午';
	} else {
		message = '晚上';
	}

	return message;
};
