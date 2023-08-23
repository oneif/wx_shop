import type { Goods, PageResult } from './homeType'

// 请求数据的类型
export type HotParams = {
  subType?: string
  pageSize: number
  page: number
}

export type SubTypeItem = {
  goodsItems: PageResult
  id: string
  title: string
}
export type SubTypes = SubTypeItem[]
export type HotResult = {
  bannerPicture: string
  id: string
  subTypes: SubTypes
  title: string
}
