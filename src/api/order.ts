import { request } from '@/utils/request'
import type {
  OrderCreateParams,
  OrderPreResult,
  OrderResult,
  OrderLogisticResult,
  OrderListResult,
  OrderListParams,
} from './orderType'

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
/**
 * 获取订单详情
 * @param 订单id
 */
export const getOrderListById = (id: string) => {
  return request<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}
/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getOrderConsignmentById = (id: string) => {
  return request({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}
/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putOrderReceiptById = (id: string) => {
  return request<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}
/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getOrderLogisticsById = (id: string) => {
  return request<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}
/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteOrderById = (data: { ids: string[] }) => {
  return request({
    method: 'DELETE',
    url: `/member/order`,
    data,
  })
}
/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getOrderList = (data: OrderListParams) => {
  return request<OrderListResult>({
    method: 'GET',
    url: `/member/order`,
    data,
  })
}
