import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
// 返回结果的类型
interface Data<T> {
  code: string
  msg: string
  result: T
}

const memberStore = useMemberStore()
const requestInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) options.url = baseUrl + options.url
    options.timeout = 10000
    // 添加请求头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token
    const token = memberStore.profile?.token
    if (token) options.header.Authorization = token
  },
}
// 请求拦截器
uni.addInterceptor('request', requestInterceptor)
uni.addInterceptor('uploadFile', requestInterceptor)

export const request = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(res.data as Data<T>)
        else if (res.statusCode === 401) {
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({ icon: 'none', title: (res.data as Data<T>).msg || '请求错误' })
          reject(res)
        }
      },
      fail: (err) => {
        uni.showToast({ icon: 'none', title: '网络错误，换个网络试试' })
        reject(err)
      },
    })
  })
}
