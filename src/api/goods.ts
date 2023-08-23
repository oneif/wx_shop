import { request } from '@/utils/request'
import type { GoodsResult } from './goodsType'

/**
 * 根据商品id获取商品详情
 * @param id 商品的id
 */
export const getGoodsById = (id: string) => {
  return request<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: { id },
  })
}
