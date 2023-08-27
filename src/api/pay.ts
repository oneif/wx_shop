import { request } from '@/utils/request'

/**
 * 获取支付接口
 * @param data orderId订单的id
 */
export const getWxPay = (data: { orderId: string }) => {
  return request({
    url: '/pay/mock',
    data,
  })
}
