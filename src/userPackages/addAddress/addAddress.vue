<template>
  <view class="content">
    <uni-forms ref="formRef" :rules="rules" :model="addressForm">
      <!-- 表单内容 -->
      <uni-forms-item name="receiver" class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="addressForm.receiver" />
      </uni-forms-item>
      <uni-forms-item name="contact" class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model.number="addressForm.contact" />
      </uni-forms-item>
      <uni-forms-item name="fullLocation" class="form-item">
        <text class="label">所在地区</text>
        <picker class="picker" mode="region" @change="regionChange" :value="addressForm.fullLocation">
          <view v-if="addressForm.fullLocation">{{ addressForm.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </uni-forms-item>
      <uni-forms-item name="address" class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="addressForm.address" />
      </uni-forms-item>
      <uni-forms-item class="form-item">
        <label class="label">设为默认地址</label>
        <switch class="switch" color="#409eff" :checked="addressForm.isDefault == 1" @change="switchChange" />
      </uni-forms-item>
    </uni-forms>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="submit">保存并使用</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { addaddress, getAddressById, updateaddress } from '@/api/address'
import { onLoad } from '@dcloudio/uni-app';
const query = defineProps<{ id?: string }>()
uni.setNavigationBarTitle({ title: query.id ? '编辑地址' : '新增地址' })

// 表单数据
const addressForm = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})

const regionChange: UniHelper.RegionPickerOnChange = (event) => {
  addressForm.value.fullLocation = event.detail.value.join(' ')
  const [provinceCode, cityCode, countyCode] = event.detail.code!
  Object.assign(addressForm.value, { provinceCode, cityCode, countyCode })
}
const switchChange: UniHelper.SwitchOnChange = (event) => {
  addressForm.value.isDefault = event.detail.value ? 1 : 0
}

const submit = async () => {
  try {
    await formRef.value?.validate!()
    if (query.id) await updateaddress(query.id, addressForm.value)
    else await addaddress(addressForm.value)

    uni.showToast({ title: query.id ? '修改成功' : '新增地址成功' })
    setTimeout(() => { uni.navigateBack() }, 400);
  } catch (error) {
    uni.showToast({ title: '填写信息有误', icon: 'error' })
  }
}

const getAddresssDataById = async () => {
  if (query.id) {
    const res = await getAddressById(query.id)
    Object.assign(addressForm.value, res.result)
  }
}

// 检验规则
const rules = {
  receiver: {
    rules: [{ required: true, errorMessage: '请输入收货人姓名' }]
  },
  contact: {
    rules: [
      { required: true, errorMessage: '请输入联系方式' },
      { pattern: /^(?:(?:\+|00)86)?1\d{10}$/, errorMessage: '手机号格式不正确' },
    ],
  },
  fullLocation: {
    rules: [{ required: true, errorMessage: '请选择所在地区' }],
  },
  address: {
    rules: [{ required: true, errorMessage: '请选择详细地址' }],
  },
}
const formRef = ref<UniHelper.UniFormsInstance>()


onLoad(() => { getAddresssDataById() })
</script>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #00a6bf;
}
</style>