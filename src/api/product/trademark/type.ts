import { responseData } from '@/api/user/type';

// 商品属性
export type Trademark = {
	id?: number;
	tmName: string;
	logoUrl: string;
};

// 已有品牌类型
export type Records = [];

// 已有品牌全部数据
export interface TrademarkData extends responseData {
	data: {
		records: Records;
		total: number;
		size: number;
		current: number;
		searchCount: boolean;
		pages: number;
	};
}
