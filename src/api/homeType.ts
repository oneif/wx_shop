/** 首页-广告区域数据类型 */
export type SwiperItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

// 首页-推荐区域的数据类型
export type SuggesstionItem = {
  alt: string
  id: number
  pictures: string[]
  target: string
  title: string
  type: number
}

// 首页-猜你喜欢区域数据类型
export type Goods = {
  desc: string
  id: number
  name: string
  orderNum: number
  picture: string
  price: string
}
export type PageResult = {
  counts: number
  items: Goods[]
  page: number
  pageSize: number
  pages: number
}
