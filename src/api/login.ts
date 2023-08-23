import { request } from '@/utils/request'
import type { UserInfo } from './user'

/**
 * 根据手机号码登录
 * @param phoneNumber 手机号码
 */
export const postLogin = (phoneNumber: string) => {
  return request<UserInfo>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: {
      phoneNumber,
    },
  })
}
