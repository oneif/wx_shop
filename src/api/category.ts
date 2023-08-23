import { request } from '@/utils/request'
import type { categoryItem } from './categoryType'

/**
 * 获取分类列表的数据（左侧导航栏
 */
export const getCategoryList = () => {
  return request<categoryItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
