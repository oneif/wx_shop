export type Gender = '男' | '女'

export type UserProfile = {
  id: string
  avatar: string
  nickname: string
  account: string
  gender?: Gender
  birthday: string
  fullLocation: string
  profession: string
}

export type UpdateUserProfile = {
  nickname?: string
  gender?: Gender
  birthday?: string
  profession?: string
  provinceCode?: string
  cityCode?: string
  countyCode?: string
}
