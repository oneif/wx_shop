// 组合式函数

import { ref } from 'vue'
import type Guess from '@/components/Guess.vue'

export const useGuessList = () => {
  const guessRef = ref<typeof Guess>()
  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getGuessData()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
