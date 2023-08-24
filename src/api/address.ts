import { request } from '@/utils/request'
import type { AddressItem, AddressParams } from './addressType'

/**
 * 新增地址的接口 /member
 * @param AddressParams 新增地址的数据
 */
export const addaddress = (data: AddressParams) => {
  return request({
    method: 'POST',
    url: '/member/address',
    data: data,
  })
}
/**
 * 修改已有地址的接口 /member/address/{id}
 * @param id 地址信息的id
 * @param data 更新地址的数据
 */
export const updateaddress = (id: string, data: AddressParams) => {
  return request({
    method: 'PUT',
    url: `/member/address/${id}`,
    data: data,
  })
}
/**
 * 获取收货地址列表
 */
export const getAddressList = () => {
  return request<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 获取收货地址详情
 * @param id 地址信息的id
 */
export const getAddressById = (id: string) => {
  return request<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 根据id删除对应地址
 * @param id 要删除的地址id
 */
export const deleteAddressById = (id: string) => {
  return request({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
