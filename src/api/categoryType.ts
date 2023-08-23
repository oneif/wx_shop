import type { Goods } from './homeType'

// 一级分类数据
export type categoryItem = {
  children: categoryChildrenItem[]
  id: string
  name: string
  picture: string
}

// 二级分类数据
export type categoryChildrenItem = {
  goods: Goods[]
  id: string
  name: string
  picture: string
}
