const enum NavButton {
	HOME, // 值为 HOME
	CLASSIFY, // 值为 1
	MENU, // 2
	PROFILE = 'PROFILE', // 3
}

const a: NavButton = NavButton.PROFILE;
console.log(a); // classify
const b = NavButton[0]; // 也可以通过下标进行访问
console.log(b); // classify
