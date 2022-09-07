<template>
  <view>
    <van-card :thumb="item.goods_small_logo || defaultPic" v-for="item in goodsList" :key="item.goods_id"
      :price="item.goods_price | toFixed" :title="item.goods_name"
      :thumb-link="`/subpackage/detail/detail?id=${item.goods_id}`" />
  </view>
</template>

<script>
  import {
    getGoodsList
  } from '../../api/goods.js'
  import message from '@/utils/message.js'
  export default {
    data() {
      return {
        queryData: {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        isLoading: false,
        goodsList: [],
        total: 0,
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      };
    },
    methods: {
      async loadGoodsList(stopPullDown) {
        this.isLoading = true
        const res = await getGoodsList(this.queryData)
        this.isLoading = false
        this.goodsList = [...this.goodsList, ...res.message.goods]
        this.total = res.message.total
        stopPullDown && stopPullDown()
      }
    },
    onLoad({
      query
    }) {
      this.queryData.query = query
      this.loadGoodsList()
    },
    onPullDownRefresh() {
      this.queryData = {
        query: this.queryData.query,
        cid: '',
        pagenum: 1,
        pagesize: 10
      }
      this.goods = [],
        this.total = 0
      this.loadGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    },
    // 监听上拉触底
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pagesize >= this.total) return message('亲 没有更多数据了')
      if (this.isLoading) return
      this.queryData.pagenum++
      this.loadGoodsList()
    }
  }
</script>

<style lang="scss">

</style>
