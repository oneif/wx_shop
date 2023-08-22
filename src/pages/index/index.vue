<template>
  <CustomNavbar />
  <PageSkeleton v-if="isLoading" />
  <template v-else>
    <Swiper :swiperList="swiperList" />
    <HomeList />
    <Suggestion :list="suggestionList" />
    <Guess ref="guessRef" />
  </template>
</template>

<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import Swiper from '@/components/Swiper.vue';
import HomeList from '@/pages/index/components/HomeList.vue'
import Suggestion from '@/pages/index/components/Suggestion.vue'
import Guess from '@/components/Guess.vue';
import PageSkeleton from './components/PageSkeleton.vue';

import { getSwiperList, getSuggesstionList } from '@/api/home'
import type { SwiperItem, SuggesstionItem } from '@/api/homeType'
import { ref } from 'vue';
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app';
const guessRef = ref<InstanceType<typeof Guess>>()

const swiperList = ref<SwiperItem[]>([])
const getSwiperData = async () => {
  const res = await getSwiperList()
  swiperList.value = res.result
}

const suggestionList = ref<SuggesstionItem[]>([])
const getSuggesstionData = async () => {
  const res = await getSuggesstionList()
  suggestionList.value = res.result
}

const isLoading = ref(false)
// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getSwiperData(), getSuggesstionData()])
  isLoading.value = false
})
// 页面触底事件
onReachBottom(() => {
  guessRef.value?.getGuessData()
})
onPullDownRefresh(async () => {
  guessRef.value?.resetData()
  await Promise.all([getSwiperData(), getSuggesstionData(), guessRef.value?.getGuessData()])
  uni.stopPullDownRefresh()
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>