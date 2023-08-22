<template name="skeleton">
    <view is="components/Swiper" current="0" autoplay="false">
        <view class="carousel Swiper--carousel">
            <swiper :autoplay="false" :circular="true" :interval="3000" :current="0"></swiper>
            <view class="indicator Swiper--indicator">
                <text class="dot Swiper--dot"></text>
                <text class="dot Swiper--dot"></text>
                <text class="dot Swiper--dot"></text>
                <text class="dot Swiper--dot"></text>
                <text class="dot Swiper--dot active Swiper--active"></text>
            </view>
        </view>
    </view>
    <view is="pages/index/components/HomeList">
        <view class="category HomeList--category">
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-391 sk-text">超市</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-940 sk-text">电器</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-585 sk-text">美妆</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-894 sk-text">生鲜</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-163 sk-text">小时达</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-413 sk-text">充值</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-853 sk-text">附近</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-830 sk-text">品牌</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-181 sk-text">进口</text>
            </navigator>
            <navigator class="category-item HomeList--category-item" hover-class="none">
                <image class="icon HomeList--icon sk-image"></image>
                <text class="text HomeList--text sk-transparent sk-text-14-2857-41 sk-text">杂项</text>
            </navigator>
        </view>
    </view>
    <view is="pages/index/components/Suggestion">
        <view class="panel Suggestion--panel hot Suggestion--hot">
            <view class="item Suggestion--item">
                <view class="title Suggestion--title">
                    <text class="title-text Suggestion--title-text sk-transparent sk-text-14-2857-117 sk-text">特惠推荐</text>
                    <text class="title-desc Suggestion--title-desc sk-transparent sk-text-14-2857-774 sk-text">精选全攻略</text>
                </view>
                <navigator class="cards Suggestion--cards" hover-class="none">
                    <image class="image Suggestion--image sk-image" mode="aspectFit"></image>
                    <image class="image Suggestion--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item Suggestion--item">
                <view class="title Suggestion--title">
                    <text class="title-text Suggestion--title-text sk-transparent sk-text-14-2857-478 sk-text">爆款推荐</text>
                    <text class="title-desc Suggestion--title-desc sk-transparent sk-text-14-2857-859 sk-text">最受欢迎</text>
                </view>
                <navigator class="cards Suggestion--cards" hover-class="none">
                    <image class="image Suggestion--image sk-image" mode="aspectFit"></image>
                    <image class="image Suggestion--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item Suggestion--item">
                <view class="title Suggestion--title">
                    <text class="title-text Suggestion--title-text sk-transparent sk-text-14-2857-74 sk-text">一站买全</text>
                    <text class="title-desc Suggestion--title-desc sk-transparent sk-text-14-2857-692 sk-text">精心优选</text>
                </view>
                <navigator class="cards Suggestion--cards" hover-class="none">
                    <image class="image Suggestion--image sk-image" mode="aspectFit"></image>
                    <image class="image Suggestion--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item Suggestion--item">
                <view class="title Suggestion--title">
                    <text class="title-text Suggestion--title-text sk-transparent sk-text-14-2857-608 sk-text">新鲜好物</text>
                    <text class="title-desc Suggestion--title-desc sk-transparent sk-text-14-2857-369 sk-text">生活加分项</text>
                </view>
                <navigator class="cards Suggestion--cards" hover-class="none">
                    <image class="image Suggestion--image sk-image" mode="aspectFit"></image>
                    <image class="image Suggestion--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
        </view>
    </view>
    <view is="components/Guess" class="r">
        <view class="guess Guess--guess">
            <navigator class="guess-item Guess--guess-item">
                <image class="image Guess--image sk-image" mode="aspectFill"></image>
            </navigator>
            <navigator class="guess-item Guess--guess-item">
                <image class="image Guess--image sk-image" mode="aspectFill"></image>
            </navigator>
        </view>
    </view>
</template>

<style scoped>
.sk-transparent {
    color: transparent !important;
}

.sk-text-3-3333-553 {
    background-image: linear-gradient(transparent 3.3333%, #EEEEEE 0%, #EEEEEE 96.6667%, transparent 0%) !important;
    background-size: 100% 26.2850rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-248 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.7991rpx;
    position: relative !important;
}

.sk-text-14-2857-391 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-940 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-585 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-894 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-163 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-413 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-853 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-830 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-181 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-41 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-117 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.1589rpx;
    position: relative !important;
}

.sk-text-14-2857-774 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-478 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.1589rpx;
    position: relative !important;
}

.sk-text-14-2857-859 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-74 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.1589rpx;
    position: relative !important;
}

.sk-text-14-2857-692 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-608 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.1589rpx;
    position: relative !important;
}

.sk-text-14-2857-369 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>