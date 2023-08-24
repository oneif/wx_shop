import { request } from '@/utils/request'
import type { UserProfile, UpdateUserProfile } from './userInfoType'

/**
 * 获取用户信息的接口
 */
export const getUserInfo = () => {
  return request<UserProfile>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 更新用户信息
 * @param data 请求体数据
 */
export const updateUserInfo = (data: UpdateUserProfile) => {
  return request<UserProfile>({
    method: 'PUT',
    url: '/member/profile',
    data: data,
  })
}
