export type AddressParams = {
  /** 收货人姓名 */
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  /** 默认地址，1为是，0为否 */
  isDefault: number
}

export type AddressItem = AddressParams & {
  id: string
  fullLocation: string
}
