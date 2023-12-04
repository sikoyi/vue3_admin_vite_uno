<template>
	<el-card>
		<el-button type="primary" class="mb-20px">添加品牌</el-button>
		<el-table :data="tableData" style="width: 100%" :border="true" class="mb-20px">
			<el-table-column prop="id" label="序号" width="180" align="center"></el-table-column>
			<el-table-column prop="date" label="品牌名称" width="180" align="center"></el-table-column>
			<el-table-column prop="name" label="品牌LOGO" width="180" align="center"></el-table-column>
			<el-table-column prop="address" label="品牌操作">
				<template #default="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
					<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination
			v-model:current-page="pageNo"
			v-model:page-size="limit"
			:page-sizes="[3, 5, 7, 9]"
			:background="true"
			layout="prev, pager, next, jumper,->, sizes, total"
			:total="400"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		/>
	</el-card>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { reqHasTrademark } from '@/api/product/trademark';

const tableData = reactive([]);

const handleEdit = () => {};
const handleDelete = () => {};

let pageNo = ref(1);
let limit = ref(3);

const getHasTrademark = async () => {
	const result = await reqHasTrademark(pageNo.value, limit.value);
	if (result.code == 200) {
	}
};

onMounted(() => {
	getHasTrademark();
});

const handleSizeChange = () => {};
const handleCurrentChange = () => {};
</script>
