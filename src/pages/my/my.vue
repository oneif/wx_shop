<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button @tap="memberStore.setProfile({ nickname: 'op先锋' })" size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
  </view>
  <button @tap="getData" plain>点我发请求</button>
  <view>{{ }}</view>
</template>


<script setup lang="ts">
import { useMemberStore } from '@/stores'
import '@/utils/request'
import { request } from '@/utils/request'
const memberStore = useMemberStore()

const getData = async () => {
  const res = await request({
    url: '/member/carth',
    method: 'GET',
  })
  console.log(res);

}
</script>

<style lang="scss">
//
</style>
