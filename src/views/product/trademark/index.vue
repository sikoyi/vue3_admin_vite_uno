<template>
	<div>
		<el-card>
			<el-button type="primary" class="mb-20px" @click="addTrademark">添加品牌</el-button>
			<el-table :data="trademarkList" style="width: 100%" :border="true" class="mb-20px">
				<el-table-column prop="id" label="序号" width="180" align="center"></el-table-column>
				<el-table-column prop="tmName" label="品牌名称" width="180" align="center"></el-table-column>
				<el-table-column prop="logoUrl" label="品牌LOGO" width="180" align="center">
					<template #default="{ row }">
						<el-image :src="row.logoUrl"></el-image>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="品牌操作">
					<template #default="scope">
						<el-button type="primary" @click="updateTrademark(scope.$index, scope.row)" icon="edit">编辑</el-button>
						<el-button type="danger" @click="deleteTrademark(scope.$index, scope.row)" icon="delete">删除</el-button>
					</template>
				</el-table-column>
			</el-table>

			<el-pagination
				v-model:current-page="pageNo"
				v-model:page-size="limit"
				:page-sizes="[3, 5, 7, 9]"
				:background="true"
				layout="prev, pager, next, jumper,->, sizes, total"
				@size-change="sizeChange"
				:total="total"
				@current-change="getHasTrademark"
			/>
		</el-card>





		<!-- 对话框: 添加品牌/修改品牌 -->
		<el-dialog v-model="dialogFormVisible" :title="dialogTitle">
			<el-form class="w-80%">
				<el-form-item label="品牌名称" required label-width="100px">
					<el-input v-model="trademarkParams.tmName" autocomplete="off" />
				</el-form-item>
				<el-form-item label="品牌LOGO" required label-width="100px">
					<el-upload
						class="avatar-uploader"
						action="/api/admin/product/fileUpload"
						:show-file-list="false"
						:on-success="uploadSuccess"
						:before-upload="beforeUpload"
					>
						<img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
						<el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
					</el-upload>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancel = false">取消</el-button>
					<el-button type="primary" @click="confirm = false">确定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { reqHasTrademark } from '@/api/product/trademark';
import { Records, Trademark } from '@/api/product/trademark/type';
import { ElMessage, UploadProps } from 'element-plus';

// 当前页码
let pageNo = ref<number>(1);

// 一页展示数据总数
let limit = ref<number>(3);

// 品牌数据总数
let total = ref<number>(0);

// 已有品牌的数据
let trademarkList = ref<Records>([]);

// 控制对话框显示隐藏
let dialogFormVisible = ref<boolean>(false);

// 定义收集新增品牌数据
let trademarkParams = reactive<Trademark>({
	tmName: '',
	logoUrl: '',
});

/**
 *	获取分页数据
 * @param pager 为了在切换展示页面数量时回到第一页
 */
const getHasTrademark = async (pager = 1) => {
	pageNo.value = pager;
	const result = await reqHasTrademark(pageNo.value, limit.value);
	if (result.code == 200) {
		total.value = result.data.total;
		trademarkList.value = result.data.records;

		// # 可删除
		trademarkList.value = trademarkList.value.map((e) => {
			if (!(e.logoUrl as string).startsWith('http')) {
				e.logoUrl = 'http://' + e.logoUrl;
			}
			return e;
		});
	}
	console.log(result);
};

onMounted(() => {
	getHasTrademark();
});

const sizeChange = () => {
	getHasTrademark();
};

const dialogTitle = ref('');

// 添加品牌
const addTrademark = () => {
	dialogFormVisible.value = true;
	dialogTitle.value = '添加品牌';
};

// 编辑品牌
const updateTrademark = (index: number, rowInfo) => {
	dialogFormVisible.value = true;
	dialogTitle.value = '编辑品牌';
};
// 删除品牌
const deleteTrademark = (index: number, rowInfo) => {
	dialogFormVisible.value = true;
	dialogTitle.value = '删除品牌';
};

// 上传图片前校验
const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
	const imagesType = ['image/jpeg', 'image/png', 'image/gif'];
	if (!imagesType.includes(rawFile.type)) {
		ElMessage({
			type: 'error',
			message: '上传图片类型必须是png|jpg|gif',
		});
		return false;
	}

	if (rawFile.size / 1024 / 1024 > 4) {
		ElMessage({
			type: 'error',
			message: '上传图片大小必须小于4M',
		});
		return false;
	}
};

// 图片上传成功钩子
const uploadSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
	console.log(response);
	trademarkParams.logoUrl = response.data;
};

// 对话框底部取消
const cancel = () => {
	dialogFormVisible.value = false;
};
// 对话框底部确认
const confirm = () => {
	dialogFormVisible.value = false;
};
</script>

<style lang="scss" scoped>
.avatar-uploader .avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
}
</style>
