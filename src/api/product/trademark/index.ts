// 商品管理模块请求
import request from '@/utils/request';
import { Records, TrademarkData } from './type';

enum API {
	// 获取已有品牌接口
	TRADEMARK_URL = '/admin/product/baseTrademark',
	// 新增品牌接口
	ADD_TRADEMARK_URL = '/admin/product/baseCategoryTrademark/save',
	// 修改品牌接口
	UPDATE_TRADEMARK_URL = '/admin/product/baseCategoryTrademark/update',
	// 删除品牌接口
	DELETE_TRADEMARK_URL = '/admin/product/baseCategoryTrademark/save',
}

// 获取已有品牌接口
export const reqHasTrademark = (page: number, limit: number) =>
	request.get<any, TrademarkData>(`${API.TRADEMARK_URL}/${page}/${limit}`);

// 新增品牌接口
export const addTrademark = (data: Records) => request.post<any, null>(API.ADD_TRADEMARK_URL, data);

// 删除已有品牌接口
export const removeTrademark = (category3Id: number, limit: number) =>
	request.post<any, TrademarkData>(`${API.DELETE_TRADEMARK_URL}`, {
		category3Id,
	});

// 更新已有品牌接口
export const deleteTrademark = (data: Records) => request.put<any, null>(API.UPDATE_TRADEMARK_URL, data);
