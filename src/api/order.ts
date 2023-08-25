import { request } from '@/utils/request'
import type { OrderCreateParams, OrderPreResult } from './orderType'

/**
 * 获取订单列表
 */
export const getPreOrderList = () => {
  return request<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre',
  })
}
/**
 * 获取立即购买的订单
 */
export const getPreOrderListNow = (data: { skuId: string; count: string; addressId?: string }) => {
  return request<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}
/**
 * 提交订单的接口
 * @param data 提交订单的数据
 */
export const postOrderList = (data: OrderCreateParams) => {
  return request<{ id: string }>({
    method: 'POST',
    url: '/member/order',
    data,
  })
}
