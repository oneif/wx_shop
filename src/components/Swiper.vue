<template>
    <view class="carousel">
        <swiper circular autoplay :interval="3000" @change="swiperChange">
            <swiper-item v-for="item in swiperList" :key="item.id">
                <navigator url="/pages/index/index" hover-class="none" class="navigator">
                    <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
                </navigator>
            </swiper-item>
        </swiper>
        <!-- 指示点 -->
        <view class="indicator">
            <text v-for="(item, index) in swiperList.length" :key="item" class="dot"
                :class="{ active: index === activeIndex }"></text>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SwiperItem } from '@/api/homeType'
defineProps<{ swiperList: SwiperItem[] }>()


const activeIndex = ref(0)
const swiperChange: UniHelper.SwiperOnChange = (event) => {
    activeIndex.value = event.detail.current
}

</script>


<style lang="scss">
:host {
    display: block;
    height: 280rpx;
}

/* 轮播图 */
.carousel {
    height: 280rpx;
    position: relative;
    overflow: hidden;
    transform: translateY(0);
    background-color: #efefef;

    .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 16rpx;
        display: flex;
        justify-content: center;

        .dot {
            width: 10rpx;
            height: 10rpx;
            margin: 0 8rpx;
            border-radius: 6rpx;
            background-color: rgba(255, 255, 255, 0.4);
        }

        .active {
            background-color: #fff;
        }
    }

    .navigator,
    .image {
        width: 100%;
        height: 100%;
    }
}
</style>