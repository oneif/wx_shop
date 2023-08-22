<template>
    <view class="category">
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_1.png"></image>
            <text class="text">超市</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_2.png"></image>
            <text class="text">电器</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_3.png"></image>
            <text class="text">美妆</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_4.png"></image>
            <text class="text">生鲜</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_5.png"></image>
            <text class="text">小时达</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_6.png"></image>
            <text class="text">充值</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_7.png"></image>
            <text class="text">附近</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_8.png"></image>
            <text class="text">品牌</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_9.png"></image>
            <text class="text">进口</text>
        </navigator>
        <navigator class="category-item" hover-class="none" url="/pages/index/index">
            <image class="icon" src="../../../static/images/nav_icon_10.png"></image>
            <text class="text">杂项</text>
        </navigator>
    </view>
</template>

<script setup lang="ts">
//
</script>

<style lang="scss">
/* 前台类目 */
.category {
    margin: 20rpx 0 0;
    padding: 10rpx 0;
    display: flex;
    flex-wrap: wrap;
    min-height: 328rpx;

    .category-item {
        width: 150rpx;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;

        .icon {
            width: 76rpx;
            height: 76rpx;
        }

        .text {
            font-size: 26rpx;
            color: #666;
        }
    }
}
</style>