<template name="skeleton">
    <view class="sk-container">
        <view class="viewport">
            <view class="search">
                <view class="input">
                    <text
                        class="icon-search sk-transparent sk-text-14-2857-201 sk-text sk-pseudo sk-pseudo-circle">红酒</text>
                </view>
            </view>
            <view class="categories">
                <scroll-view :scroll-y="true" class="primary">
                    <view class="item active sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-701 sk-text">居家</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-385 sk-text">美食</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-8 sk-text">服饰</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-471 sk-text">母婴</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-813 sk-text">个护</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-495 sk-text">严选</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-175 sk-text">数码</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-549 sk-text">运动</text>
                    </view>
                    <view class="item sk-pseudo sk-pseudo-circle">
                        <text class="name sk-transparent sk-text-14-2857-123 sk-text">杂项</text>
                    </view>
                </scroll-view>
                <scroll-view :scroll-y="true" class="secondary">
                    <view is="components/Swipers">
                        <view class="carousel Swipers--carousel">
                            <swiper :autoplay="false" :circular="true" :interval="3000" :current="0"></swiper>
                            <view class="indicator Swipers--indicator">
                                <text class="dot Swipers--dot"></text>
                                <text class="dot Swipers--dot"></text>
                                <text class="dot Swipers--dot"></text>
                                <text class="dot Swipers--dot"></text>
                                <text class="dot Swipers--dot active Swipers--active"></text>
                            </view>
                        </view>
                    </view>
                    <view class="panel">
                        <view class="title">
                            <text class="name sk-transparent sk-text-27-9412-707 sk-text">居家生活用品</text>
                            <navigator class="more sk-transparent sk-text-30-8824-667 sk-text sk-pseudo sk-pseudo-circle"
                                hover-class="none">全部</navigator>
                        </view>
                        <view class="section">
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-637 sk-text">
                                    飞天53%vol500ml贵州茅台酒（带杯）</view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-969 sk-text">1499.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-878 sk-text">玛歌正牌干红750毫升2017年
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-395 sk-text">6699.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-367 sk-text">苏格兰陈年单一麦芽威士忌700毫升
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-130 sk-text">318.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-431 sk-text">下饭神器酸豆角50克*10袋</view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-545 sk-text">16.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-864 sk-text">地道卤香好味道，桂林鲜米粉245克*6盒
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-821 sk-text">69.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-846 sk-text">百年名庄出品，法国南部干红750毫升
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-429 sk-text">58.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-171 sk-text">名庄金奖加身，西班牙珍藏干红750毫升
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-211 sk-text">168.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-997 sk-text">大丈夫方便面轻巧款私房牛肉味64克*6杯
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-497 sk-text">28.50</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                                <view class="name ellipsis sk-transparent sk-text-14-2857-619 sk-text">无芯软糯的萌妹子，建宁莲子228克
                                </view>
                                <view class="price">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="number sk-transparent sk-text-14-2857-555 sk-text">45.00</text>
                                </view>
                            </navigator>
                            <navigator class="goods" hover-class="none">
                                <image class="image sk-image"></image>
                            </navigator>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-201 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.7991rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-701 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-385 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-8 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-471 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-813 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-495 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-175 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-549 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-14-2857-123 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.3458rpx;
    position: relative !important;
}

.sk-text-27-9412-707 {
    background-image: linear-gradient(transparent 27.9412%, #EEEEEE 0%, #EEEEEE 72.0588%, transparent 0%) !important;
    background-size: 100% 59.5794rpx;
    position: relative !important;
}

.sk-text-30-8824-667 {
    background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE 69.1176%, transparent 0%) !important;
    background-size: 100% 59.5794rpx;
    position: relative !important;
}

.sk-text-14-2857-637 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-969 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-878 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-text-14-2857-395 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-367 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-text-14-2857-130 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-431 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-text-14-2857-545 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-864 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-text-14-2857-821 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-846 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-text-14-2857-429 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-171 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-text-14-2857-211 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-997 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-text-14-2857-497 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.8925rpx;
    position: relative !important;
}

.sk-text-14-2857-619 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.4393rpx;
    position: relative !important;
}

.sk-text-14-2857-555 {
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