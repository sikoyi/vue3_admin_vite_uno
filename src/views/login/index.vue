<template>
	<el-row class="login-container w-full h-full bg-cover">
		<el-col :span="12" :xs="0"></el-col>
		<el-col :span="12" :xs="24">
			<el-form class="login-label" :model="fromData" :rules="rules" ref="ruleFormRef">
				<p class="color-#fff mb-10px text-14px">账号:</p>
				<el-form-item prop="username">
					<el-input v-model="fromData.username">
						<template #prepend>
							<el-button :icon="User" />
						</template>
					</el-input>
				</el-form-item>

				<p class="color-#fff mt-20px mb-10px text-14px">密码:</p>
				<el-form-item prop="password">
					<el-input v-model="fromData.password" type="password" :show-password="true">
						<template #prepend>
							<el-button :icon="Lock" />
						</template>
					</el-input>
				</el-form-item>

				<div class="mt-20px flex items-center justify-center">
					<el-button :loading="loading" type="primary" size="large" @click="login">登录</el-button>
				</div>
			</el-form>
		</el-col>
	</el-row>
</template>
<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification, FormInstance } from 'element-plus';
import { getTime } from '@/utils/time';

const userStore = useUserStore();
const $router = useRouter();

const fromData = reactive({
	username: 'admin',
	password: '111111',
});

const ruleFormRef = ref<FormInstance>();

const loading = ref(false);

const login = async () => {
	await ruleFormRef.value?.validate();

	loading.value = true;
	try {
		const result = await userStore.userLogin(fromData);
		console.log(result);
		$router.push('/');
		ElNotification({
			type: 'success',
			message: '登录成功',
			title: `Hi, ${getTime()}好`,
		});
	} catch (error: any) {
		ElNotification({
			type: 'error',
			message: error.message,
		});
	}
	loading.value = false;
};

const usernameValidate = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('用户名不能为空'));
	} else if (value.length < 4) {
		callback(new Error('账号长度不能小于4'));
	}
	callback();
};

const passwordValidate = (rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('密码不能为空'));
	} else if (value.length < 6) {
		callback(new Error('密码长度不能小于 6位'));
	}
	callback();
};

const rules = {
	username: [{ validator: usernameValidate, trigger: 'change' }],
	password: [{ validator: passwordValidate, trigger: 'change' }],
};
</script>

<style lang="scss" scoped>
.login-container {
	width: 100%;
	height: 100vh;
	background: url('@/assets/images/background.jpg') no-repeat;

	.login-label {
		width: 400px;
		padding: 30px 20px;
		margin-top: 30vh;
		margin-left: 10vw;
		background: url('@/assets/images/login_form.png') no-repeat;
	}
}
</style>
