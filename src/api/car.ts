// 购物车相关
import { request } from '@/utils/request'
import type { CartItem } from './carType'

/**
 * 加入购物车的接口
 * @param data 加入购物车的数据
 */
export const addMemberCar = (data: { skuId: string; count: number }) => {
  return request({
    method: 'POST',
    url: '/member/cart',
    data: data,
  })
}

/**
 * 加入购物车的接口
 * @param data 加入购物车的数据
 */
export const getMemberCarList = () => {
  return request<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}
/**
 * 在购物车删除对应商品的接口
 * @param data 要删除商品的id数组
 */
export const deleteMemberCarById = (data: { ids: string[] }) => {
  return request({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}
/**
 * 在购物车修改对应商品的接口
 * @param skuId 商品id
 * @param data selected 选中状态 count 商品数量
 */
export const updateMemberCarById = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return request({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}
/**
 * 修改购物车全选的接口
 * @param data selected 全选状态
 */
export const updateMemberCarSelectedAll = (data: { selected: boolean }) => {
  return request({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}
