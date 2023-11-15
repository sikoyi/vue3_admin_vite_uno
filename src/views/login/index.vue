<template>
	<el-row class="login-container w-full h-full bg-cover">
		<el-col :span="12" :xs="0"></el-col>
		<el-col :span="12" :xs="24">
			<el-form class="login-label">
				<p class="color-#fff mb-10px text-14px">账号:</p>
				<el-input v-model="fromData.username">
					<template #prepend>
						<el-button :icon="User" />
					</template>
				</el-input>

				<p class="color-#fff mt-20px mb-10px text-14px">密码:</p>
				<el-input v-model="fromData.password" type="password" :show-password="true">
					<template #prepend>
						<el-button :icon="Lock" />
					</template>
				</el-input>

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
import { ElNotification } from 'element-plus';

const userStore = useUserStore();
const $router = useRouter();

const fromData = reactive({
	username: 'admin',
	password: '111111',
});

const loading = ref(false);

const login = async () => {
	loading.value = true;
	try {
		const result = await userStore.userLogin(fromData);
		console.log(result);
		$router.push('/');
		ElNotification({
			type: 'success',
			message: '登录成功',
		});
	} catch (error: any) {
		ElNotification({
			type: 'error',
			message: error.message,
		});
	}
	loading.value = false;
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
