import type { Goods } from './homeType'

export type GoodsResult = {
  desc: string
  details: Details
  id: string
  mainPictures: string[]
  name: string
  oldPrice: number
  price: number
  similarProducts: Goods[]
  skus: SkuItem[]
  specs: SpecItem[]
  userAddresses: AddressItem[]
}

/** 商品详情: 包含详情属性 + 详情图片 */
export type Details = {
  properties: DetailsPropertyItem[]
  pictures: string[]
}

/** 属性信息 */
export type DetailsPropertyItem = {
  name: string
  value: string
}

/** sku信息 */
export type SkuItem = {
  id: string
  inventory: number
  oldPrice: number
  picture: string
  price: number
  skuCode: string
  specs: SkuSpecItem[]
}

/** 规格信息 */
export type SkuSpecItem = {
  name: string
  valueName: string
}

/** 可选规格信息 */
export type SpecItem = {
  name: string
  values: SpecValueItem[]
}

/** 可选值信息 */
export type SpecValueItem = {
  available: boolean
  desc: string
  name: string
  picture: string
}

/** 地址信息 */
export type AddressItem = {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  /** 默认地址，1为是，0为否 */
  isDefault: number
  id: string
  fullLocation: string
}
