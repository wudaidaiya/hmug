<template>
  <view>
    详情页
  </view>
</template>

<script>
  import {
    getGoodsDetail
  } from '@/api/home.js'
  export default {
    data() {
      return {
        goods_info: []
      }
    },
    methods: {
      // 定义请求商品详情数据的方法
      async loadGoodsDetail(goods_id) {
        const res = await getGoodsDetail({
          goods_id
        })
        console.log(1111, res);
        this.goods_info = res
      }
    },
    onLoad(options) {
      // 获取商品 Id
      const goods_id = options.id
      // 调用请求商品详情数据的方法
      this.loadGoodsDetail(goods_id)
    }
  }
</script>

<style>

</style>
