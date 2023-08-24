// 购物车相关
import { request } from '@/utils/request'

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
