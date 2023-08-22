// 首页相关的请求
import { request } from '@/utils/request'
import type { SwiperItem, SuggesstionItem, PageResult } from './homeType'

/**
 * 获取首页轮播图的数据
 * @param distributionSite 广告区域展示位置1 为首页（默认值）2 为商品分类页
 */
export const getSwiperList = (distributionSite = 1) => {
  return request<SwiperItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: { distributionSite },
  })
}
/**
 * 获取首页热门推荐的数据
 */
export const getSuggesstionList = () => {
  return request<SuggesstionItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
/**
 * 获取猜你喜欢的数据
 * @param pagenum 查询的页码值
 * @param pagesize 一页显示条数
 */
export const getGuessList = (pagenum: number, pagesize: number) => {
  return request<PageResult>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: {
      page: pagenum,
      pageSize: pagesize,
    },
  })
}
