<template>
    <!-- 猜你喜欢 -->
    <view class="guess">
        <navigator class="guess-item" v-for="item in guessList" :key="item.id" :url="`/pages/goods/Goods?id=${item.id}`">
            <image class="image" mode="aspectFill" :src="item.picture"></image>
            <view class="name"> {{ item.name }}</view>
            <view class="price">
                <text class="small">¥</text>
                <text>{{ item.price }}</text>
            </view>
        </navigator>
    </view>
    <view class="loading-text"> {{ finish ? '--我也是有底线的--' : '正在加载...' }} </view>
</template>

<script setup lang="ts">
import { getGuessList } from '@/api/home'
import type { Goods } from '@/api/homeType'
import { ref, onMounted } from 'vue'
const guessList = ref<Goods[]>([])

let pagenum = Math.floor(Math.random() * 35)
let pagesize = 10
let finish = ref<boolean>(false)
const getGuessData = async () => {
    if (finish.value) return uni.showToast({ icon: 'none', title: '滑到底啦~' })
    const res = await getGuessList(pagenum, pagesize)
    guessList.value.push(...res.result.items)
    if (pagenum < res.result.pages) pagenum++
    else finish.value = true
}
const resetData = () => {
    guessList.value = []
    pagenum = Math.floor(Math.random() * 35)
    finish.value = false
}


onMounted(() => {
    getGuessData()
})
defineExpose({ getGuessData, resetData })
</script>

<style lang="scss">
:host {
    display: block;
}

/* 猜你喜欢 */
.guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;
    margin-top: 40rpx;

    .guess-item {
        width: 345rpx;
        padding: 24rpx 20rpx 20rpx;
        margin-bottom: 20rpx;
        border-radius: 10rpx;
        overflow: hidden;
        background-color: #fff;
    }

    .image {
        width: 304rpx;
        height: 304rpx;
    }

    .name {
        height: 75rpx;
        margin: 10rpx 0;
        font-size: 26rpx;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        line-height: 1;
        padding-top: 4rpx;
        color: #cf4444;
        font-size: 26rpx;
    }

    .small {
        font-size: 80%;
    }
}

// 加载提示文字
.loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
}
</style>