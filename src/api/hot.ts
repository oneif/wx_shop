import { request } from '@/utils/request'
import type { HotParams, HotResult } from './hotType'

/**
 * 通用的热门推荐请求
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommend = (url: string, data?: HotParams) => {
  return request<HotResult>({
    method: 'GET',
    url: url,
    data: data,
  })
}
